# Backend (FastAPI)

## Run
```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

## Env vars
- `WWIS_ADMIN_EMAIL` (default: `rootadmin@wwistrichy.com`)
- `WWIS_ADMIN_PASSWORD` (default: `change-me`)
