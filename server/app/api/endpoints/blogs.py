from fastapi import APIRouter, Depends, HTTPException

router = APIRouter()


@router.get("/blogs")
def get_all_blogs():
    return {
        "blog1": "caca",
        "blog2": "caca2"
        }