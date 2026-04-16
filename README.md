# WWIS Website Revamp (Starter)

This repository contains a modernized starter build for Wisdom Wealth International School.

## Project Structure
- `frontend/` React + Vite site
- `backend/` FastAPI APIs for AI and admin
- `assets/` shared static assets
- `components/` reserved shared component documentation
- `pages/` reserved content planning pages

## Quick Start
### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```
