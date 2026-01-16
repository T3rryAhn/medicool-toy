from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime
from threading import Lock
from typing import Optional

from app.schemas.vision import VisionResultIn, VisionResultOut


@dataclass
class _State:
    latest: Optional[VisionResultOut] = None


_state = _State()
_lock = Lock()


def now_kst() -> datetime:
    """KST timezone-aware datetime."""
    # Python 3.9+: timezone name handling via zoneinfo is nicer, but 최소 의존성으로 고정 오프셋 사용
    from datetime import timezone, timedelta

    kst = timezone(timedelta(hours=9))
    return datetime.now(tz=kst)


def save_latest(result_in: VisionResultIn) -> VisionResultOut:
    out = VisionResultOut(
        ts=now_kst(),
        label=result_in.label,
        confidence=result_in.confidence,
        bbox=list(result_in.bbox) if result_in.bbox is not None else None,
        source=result_in.source,
    )

    with _lock:
        _state.latest = out

    return out


def get_latest() -> Optional[VisionResultOut]:
    with _lock:
        return _state.latest
