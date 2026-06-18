from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import ai, admin

app = FastAPI(title="WWIS API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(ai.router, prefix="/api/ai", tags=["AI"])
app.include_router(admin.router, prefix="/api/admin", tags=["Admin"])


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}
