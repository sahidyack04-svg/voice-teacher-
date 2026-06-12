from pydantic import BaseModel, EmailStr


class Program(BaseModel):
    id: str
    name: str
    description: str
    gradeRange: str
    provider: str
    areaServed: str


class PricingInfo(BaseModel):
    message: str
    contactPhone: str
    contactEmail: EmailStr


class HoursInfo(BaseModel):
    monday_saturday: str
    sunday: str


class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    phone: str
    grade_interest: str
    message: str


class ContactResponse(BaseModel):
    success: bool
    message: str
