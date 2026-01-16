from __future__ import annotations

from fastapi import APIRouter

from app.schemas.vision import VisionResultIn, VisionResultOut
from app.services.state_service import get_latest, save_latest

router = APIRouter(tags=["vision"])


@router.post("/api/vision/results")
def post_vision_result(payload: VisionResultIn):
    save_latest(payload)
    return {"accepted": True}


@router.get("/api/vision/latest", response_model=VisionResultOut | None)
def get_latest_result():
    return get_latest()
