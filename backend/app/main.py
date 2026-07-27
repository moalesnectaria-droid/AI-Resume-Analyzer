from fastapi import FastAPI

app = FastAPI(title="Aki AI Resume Analyzer")


@app.get("/")
def home():
    return {
        "message": "Welcome to Aki AI Resume Analyzer "
    }