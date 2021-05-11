from fastapi import APIRouter, Depends, HTTPException, Depends
from typing import Optional, List
from pydantic import BaseModel
from sqlalchemy.orm import Session
from app import models, schemas
from app.database import SessionLocal, engine
import os
import datetime


models.Base.metadata.create_all(bind=engine)

# Dependency
def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()


router = APIRouter()


@router.get("/blogs", response_model=List[schemas.Blog])
def get_all_blogs(db: Session = Depends(get_db)):
    blogs = db.query(models.Blog).all()
    return blogs

@router.post("/blog")
def save_blog(blog: schemas.Blog):
    db = SessionLocal()
    db_record = models.Blog(
        date=datetime.datetime.now().strftime("%x"),
        title=blog.title,
        description=blog.description,
        body=blog.body,
    )
    db.add(db_record)
    db.commit()
    return {
        "blog1": "caca",
        "blog2": "caca3"
        }