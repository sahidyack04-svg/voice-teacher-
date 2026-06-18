import os

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr

router = APIRouter()

ADMIN_EMAIL = os.getenv("WWIS_ADMIN_EMAIL", "rootadmin@wwistrichy.com")
ADMIN_PASSWORD = os.getenv("WWIS_ADMIN_PASSWORD", "change-me")


class LoginInput(BaseModel):
    email: EmailStr
    password: str


@router.post("/login")
def login(payload: LoginInput) -> dict[str, str]:
    if payload.email == ADMIN_EMAIL and payload.password == ADMIN_PASSWORD:
        return {"message": "Login successful"}
    raise HTTPException(status_code=401, detail="Invalid credentials")
