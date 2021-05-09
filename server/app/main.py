from typing import Optional
from pydantic import BaseModel


from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from os.path import dirname, join

from app.api.endpoints import blogs

templates = Jinja2Templates(directory='static')

app = FastAPI()

app.include_router(
    blogs.router, 
    prefix="/api",
    tags=["blogs"]
)

    
@app.get("/{rest_of_path:path}")
async def serve_my_app(request: Request, rest_of_path: str):
    if rest_of_path[0:6] == "static":
        return templates.TemplateResponse(rest_of_path, {"request": request})
    if rest_of_path[0:6] == "assets":
        return
    return templates.TemplateResponse("index.html", {"request": request})