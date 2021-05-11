from sqlalchemy import Column, Integer, String
from sqlalchemy.types import Date
from .database import Base


class Blog(Base):
    __tablename__ = "Blogs"

    id = Column(Integer, primary_key=True, index=True)
    date = Column(Date)
    title = Column(String(255), index=True)
    description = Column(String(255), index=True)
    body = Column(String(255), index=True)