from typing import Optional, List
from pydantic import BaseModel


from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from os.path import dirname, join
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

load_dotenv()


from app.api.endpoints import blog

templates = Jinja2Templates(directory='static')

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)

app.include_router(
    blog.router, 
    prefix="/api",
    tags=["blog"]
)

    
@app.get("/{rest_of_path:path}")
async def serve_my_app(request: Request, rest_of_path: str):
    if rest_of_path[0:6] == "static":
        return templates.TemplateResponse(rest_of_path, {"request": request})
    if rest_of_path[0:6] == "assets":
        return
    return templates.TemplateResponse("index.html", {"request": request})