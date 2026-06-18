from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class Query(BaseModel):
    question: str


FAQ = {
    "admissions": "Admissions are open for 2026-27.",
    "fees": "Fee details are shared during counselling.",
    "facilities": "Labs, sports campus, transport, and arts programs are available.",
}


@router.post("/chat")
def chat(payload: Query) -> dict[str, str]:
    text = payload.question.lower()
    for key, value in FAQ.items():
        if key in text:
            return {"answer": value}
    return {"answer": "Please leave your details and our team will contact you."}


@router.get("/recommendations")
def recommendations() -> dict[str, list[str]]:
    return {
        "items": [
            "Start with admissions timeline.",
            "Review campus facilities.",
            "Explore events and Instagram updates.",
        ]
    }
