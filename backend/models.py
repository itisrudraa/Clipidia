from pydantic import BaseModel, HttpUrl
from typing import Literal

class InspectRequest(BaseModel):
    url: HttpUrl
    platform: Literal["youtube", "instagram", "x"]