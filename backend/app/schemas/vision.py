from __future__ import annotations

from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel, Field, conlist


class VisionResultIn(BaseModel):
    label: str = Field(..., description="인식 라벨")
    confidence: float = Field(..., ge=0.0, le=1.0)
    bbox: Optional[conlist(int, min_length=4, max_length=4)] = Field(
        default=None, description="[x1,y1,x2,y2]"
    )
    source: str = Field(default="embedded")


class VisionResultOut(BaseModel):
    ts: datetime
    label: str
    confidence: float
    bbox: Optional[List[int]] = None
    source: str
