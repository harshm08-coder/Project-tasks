from fastapi import FastAPI, HTTPException, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from ai_service import analyze_resume
import time
import pdfplumber
import docx

app = FastAPI() 

# Allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ResumeRequest(BaseModel):
    text: str

@app.get("/")
def home():
    return {"message": "AI Resume Analyzer API Running"}


@app.post("/analyze")
def analyze(request: ResumeRequest):
    try:
        start_time = time.time()
        result = analyze_resume(request.text)
        end_time = time.time()

        return {
            "analysis": result,
            "response_time": round(end_time - start_time, 2)
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/analyze-file")
async def analyze_file(file: UploadFile = File(...)):

    try:

        start_time = time.time()
        text = ""

        # PDF
        if file.filename.endswith(".pdf"):

            with pdfplumber.open(file.file) as pdf:
                for page in pdf.pages:
                    page_text = page.extract_text()

                    if page_text:
                        text += page_text + "\n"

        # DOCX
        elif file.filename.endswith(".docx"):

            doc = docx.Document(file.file)

            for para in doc.paragraphs:
                text += para.text + "\n"

        # TXT
        elif file.filename.endswith(".txt"):

            content = await file.read()
            text = content.decode("utf-8")

        else:
            raise HTTPException(status_code=400, detail="Unsupported file type")

        if not text.strip():
            raise HTTPException(status_code=400, detail="No readable text found")

        result = analyze_resume(text)

        end_time = time.time()

        return {
            "analysis": result,
            "response_time": round(end_time - start_time, 2)
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
