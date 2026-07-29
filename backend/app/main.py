from fastapi import FastAPI, UploadFile, File, Form
import fitz  # PyMuPDF
from app.analyzer import compare_skills

app = FastAPI(title="Aki AI Resume Analyzer")


@app.get("/")
def home():
    return {
        "message": "Welcome to Aki AI Resume Analyzer "
    }


@app.post("/upload")
async def upload_resume(
    file: UploadFile = File(...),
    job_description: str = Form(...)
):
    # Citește PDF-ul
    pdf_bytes = await file.read()

    # Deschide PDF-ul
    doc = fitz.open(stream=pdf_bytes, filetype="pdf")

    # Extrage textul
    text = ""

    for page in doc:
        text += page.get_text()

    # Compară CV-ul cu Job Description
    result = compare_skills(text, job_description)

    # Trimite rezultatul
    return {
        "filename": file.filename,
        "pages": len(doc),
        **result
    }