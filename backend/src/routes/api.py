import os
from typing import List

from fastapi import APIRouter, HTTPException
from supabase import Client, create_client

from src.data import HOURS_INFO, PRICING_INFO, PROGRAMS
from src.schemas.models import ContactRequest, ContactResponse, HoursInfo, PricingInfo, Program

router = APIRouter()


def get_supabase_client() -> Client | None:
    url = os.getenv("SUPABASE_URL")
    key = os.getenv("SUPABASE_SERVICE_ROLE_KEY")
    if not url or not key:
        return None
    return create_client(url, key)


@router.get("/services", response_model=List[Program], tags=["services"])
async def get_services() -> List[Program]:
    return [Program(**program) for program in PROGRAMS]


@router.get("/services/{program_id}", response_model=Program, tags=["services"])
async def get_service_by_id(program_id: str) -> Program:
    for program in PROGRAMS:
        if program["id"] == program_id:
            return Program(**program)
    raise HTTPException(status_code=404, detail="Program not found")


@router.get("/pricing", response_model=PricingInfo, tags=["school"])
async def get_pricing() -> PricingInfo:
    return PricingInfo(**PRICING_INFO)


@router.get("/hours", response_model=HoursInfo, tags=["school"])
async def get_hours() -> HoursInfo:
    return HoursInfo(**HOURS_INFO)


@router.post("/contact", response_model=ContactResponse, tags=["contact"])
async def submit_contact(payload: ContactRequest) -> ContactResponse:
    supabase = get_supabase_client()
    if supabase:
        supabase.table("inquiries").insert(
            {
                "name": payload.name,
                "email": payload.email,
                "phone": payload.phone,
                "grade_interest": payload.grade_interest,
                "message": payload.message,
            }
        ).execute()

    return ContactResponse(success=True, message="We'll be in touch")
