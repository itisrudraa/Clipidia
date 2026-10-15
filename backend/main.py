from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import InspectRequest


app = FastAPI(title="Clipidia API")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message":"Clipidia server started"}

@app.post("/api/downloads/inspect")
def inspect_video(request:InspectRequest):
    return {
        "message" : "request received successfully",
        "platform" : request.platform,
        "url" : request.url 
    }