from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.routes.api import router as api_router
from src.routes.mcp import router as mcp_router

app = FastAPI(
    title="Wisdom Wealth International School API",
    description="Agent-ready API for WWIS admissions and program discovery.",
    version="1.0.0",
    contact={"email": "rootadmin@wwistrichy.com"},
    terms_of_service="https://wwistrichy.com/terms",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router)
app.include_router(mcp_router)

