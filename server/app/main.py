from typing import Optional
from pydantic import BaseModel


from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from os.path import dirname, join

from app.routes import views

templates = Jinja2Templates(directory='static')

app = FastAPI()

# @app.get("/", response_class=HTMLResponse)
# async def serve_home(request: Request):
#     return templates.TemplateResponse("index.html", {"request": request})
    
@app.get("/{rest_of_path:path}")
async def serve_my_app(request: Request, rest_of_path: str):
    print(rest_of_path)
    print(rest_of_path)
    if rest_of_path[0:6] == "static":
        return templates.TemplateResponse(rest_of_path, {"request": request})
    if rest_of_path[0:6] == "assets":
        return
    return templates.TemplateResponse("index.html", {"request": request})

app.include_router(views.router)