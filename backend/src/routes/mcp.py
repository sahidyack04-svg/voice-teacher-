import os
from typing import Any, Dict

from fastapi import APIRouter
from fastapi.responses import JSONResponse
from supabase import Client, create_client

from src.data import HOURS_INFO, PRICING_INFO, PROGRAMS

router = APIRouter()


def get_supabase_client() -> Client | None:
    url = os.getenv("SUPABASE_URL")
    key = os.getenv("SUPABASE_SERVICE_ROLE_KEY")
    if not url or not key:
        return None
    return create_client(url, key)


MCP_TOOLS = [
    {
        "name": "get-services",
        "title": "Get WWIS Programs",
        "description": "Returns WWIS programs with grade ranges and descriptions.",
        "inputSchema": {
            "type": "object",
            "additionalProperties": False,
            "properties": {},
            "required": [],
        },
    },
    {
        "name": "get-pricing",
        "title": "Get WWIS Pricing Guidance",
        "description": "Returns pricing guidance and admissions contact details.",
        "inputSchema": {
            "type": "object",
            "additionalProperties": False,
            "properties": {},
            "required": [],
        },
    },
    {
        "name": "check-availability",
        "title": "Check Visit Availability",
        "description": "Returns school hours and visit-booking availability guidance.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "preferred_day": {"type": "string", "description": "Preferred visit day"},
                "preferred_time": {"type": "string", "description": "Preferred visit time"},
            },
            "required": [],
            "additionalProperties": False,
        },
    },
    {
        "name": "submit-inquiry",
        "title": "Submit Admissions Inquiry",
        "description": "Creates an inquiry record and returns confirmation.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "name": {"type": "string"},
                "email": {"type": "string", "format": "email"},
                "phone": {"type": "string"},
                "grade_interest": {"type": "string"},
                "message": {"type": "string"},
            },
            "required": ["name", "email", "phone", "grade_interest", "message"],
            "additionalProperties": False,
        },
    },
]


def jsonrpc_response(result: Dict[str, Any], request_id: Any = 1) -> JSONResponse:
    return JSONResponse({"jsonrpc": "2.0", "id": request_id, "result": result})


def jsonrpc_error(code: int, message: str, request_id: Any = 1) -> JSONResponse:
    return JSONResponse({"jsonrpc": "2.0", "id": request_id, "error": {"code": code, "message": message}})


def call_tool(name: str, arguments: Dict[str, Any]) -> Dict[str, Any]:
    if name == "get-services":
        return {"content": [{"type": "text", "text": str(PROGRAMS)}], "structuredContent": {"services": PROGRAMS}}

    if name == "get-pricing":
        return {
            "content": [{"type": "text", "text": PRICING_INFO["message"]}],
            "structuredContent": PRICING_INFO,
        }

    if name == "check-availability":
        preferred_day = arguments.get("preferred_day", "Not provided")
        preferred_time = arguments.get("preferred_time", "Not provided")
        availability = {
            "hours": HOURS_INFO,
            "visitAvailability": "Visits available Monday-Saturday during school hours",
            "requestedSlot": {"preferred_day": preferred_day, "preferred_time": preferred_time},
            "contactPhone": "+91 81246 48888",
            "contactEmail": "rootadmin@wwistrichy.com",
        }
        return {
            "content": [{"type": "text", "text": "Visit slots are available during school hours."}],
            "structuredContent": availability,
        }

    if name == "submit-inquiry":
        supabase = get_supabase_client()
        if supabase:
            supabase.table("inquiries").insert(arguments).execute()
        return {
            "content": [{"type": "text", "text": "Inquiry submitted. The admissions team will contact you shortly."}],
            "structuredContent": {"success": True, "message": "Inquiry submitted"},
        }

    raise ValueError(f"Unknown tool: {name}")


@router.get("/api/mcp", tags=["mcp"])
async def mcp_info() -> Dict[str, Any]:
    return {
        "name": "wwis-mcp-server",
        "protocol": "MCP",
        "transport": "JSON-RPC over HTTP",
        "methods": ["tools/list", "tools/call"],
    }


@router.post("/api/mcp", tags=["mcp"])
async def mcp_rpc(payload: Dict[str, Any]) -> JSONResponse:
    method = payload.get("method")
    request_id = payload.get("id", 1)
    params = payload.get("params", {})

    if method == "tools/list":
        return jsonrpc_response({"tools": MCP_TOOLS}, request_id=request_id)

    if method == "tools/call":
        tool_name = params.get("name")
        arguments = params.get("arguments", {})
        if not tool_name:
            return jsonrpc_error(-32602, "Missing tool name", request_id=request_id)
        try:
            result = call_tool(tool_name, arguments)
            return jsonrpc_response(result, request_id=request_id)
        except ValueError as error:
            return jsonrpc_error(-32601, str(error), request_id=request_id)

    return jsonrpc_error(-32601, f"Method not found: {method}", request_id=request_id)
