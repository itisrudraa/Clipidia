from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import InspectRequest
from fastapi.responses import FileResponse
from starlette.background import BackgroundTask
import shutil
import os
from services.download_service import download_video
from services.video_service import inspect_video
from fastapi import HTTPException
from yt_dlp.utils import DownloadError


app = FastAPI(title="Clipidia API")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",  
        "https://clipidia.vercel.app",
    ],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message":"Clipidia server started"}

@app.post("/api/downloads/inspect")
def inspect_video_endpoint(request:InspectRequest):
    try:
        info = inspect_video(str(request.url))

        return{
            "title":info.get("title"),
            "thumbnail":info.get("thumbnail"),
            "duration":info.get("duration"),
            "uploader":info.get("uploader")
        }
    except: 
        if request.platform == "youtube":
            raise HTTPException(
                status_code=502,
                detail=(
                    "YouTube is temporarily unavailable or restricting "
                    "requests. Please try Instagram Reels or X instead."
                ),
            )

        raise HTTPException(
            status_code=502,
            detail="Unable to retrieve this video right now. Please try again later.",
        )

@app.post("/api/downloads")
def download_video_endpoint(request: InspectRequest):
    file_path, temp_dir = download_video(str(request.url))

    return FileResponse(
        path=file_path,
        filename=os.path.basename(file_path),
        background=BackgroundTask(
            shutil.rmtree,
            temp_dir,
            ignore_errors=True,
        ),
    )
