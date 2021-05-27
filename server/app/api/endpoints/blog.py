from fastapi import APIRouter, Depends, HTTPException, Depends, Request
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


@router.get("/blogs{rest_of_path:path}", response_model=List[schemas.Blog])
async def get_all_blogs(request: Request, db: Session = Depends(get_db)):
    if request.query_params:
        if request.query_params['category']:
            blogs = db.query(models.Blog).filter(models.Blog.category == request.query_params['category']).all()
    else:
        blogs = db.query(models.Blog).all()
    return blogs

@router.post("/blog")
def save_blog(blog: schemas.Blog):
    db = SessionLocal()
    db_record = models.Blog(
        date=datetime.datetime.now().strftime("%x"),
        title=blog.title,
        description=blog.description,
        category=blog.category,
        body=blog.body,
    )
    db.add(db_record)
    db.commit()
    return blog