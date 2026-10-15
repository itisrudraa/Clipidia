from fastapi import FastAPI

app = FastAPI(title="Clipidia API")

@app.get("/")
def home():
    return {"message":"Clipidia server started"}