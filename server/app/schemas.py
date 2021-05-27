from typing import Optional
from datetime import date
from pydantic import BaseModel


class Blog(BaseModel):
    id: Optional[int]
    date: Optional[date]
    title: Optional[str]
    description: str
    category: Optional[str]
    body: str
    class Config:
        orm_mode = True