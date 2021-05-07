from fastapi import APIRouter

router = APIRouter()

@router.get("/blogs")
def getAllBlogs():
    return {
        "blog1": "caca",
        "blog2": "caca2"
        }