from fastapi import FastAPI

app = FastAPI(title="Shotontro AI Backend")

@app.get("/")
async def root():
    return {"message": "Welcome to Shotontro AI Backend"}

@app.get("/health")
async def health():
    return {"status": "healthy"}
