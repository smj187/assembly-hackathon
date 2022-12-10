from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from typing import Dict

from services.assemblyai import upload_local_file, get_transcription
from secrets import ASSEMBLY_AI_KEY

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/assembly")
async def process_assembly_file(file: UploadFile = File(...)):
    # https://www.assemblyai.com/docs/audio-intelligence#summarization

    # summary_model           summary_type
    # informative -> supports: bullets,bullets_verbose,headline,paragraph
    # conversational -> supports: bullets,bullets_verbose,headline,paragraph
    # catchy -> supports: headline,gist
    
    assembly_request_body: Dict[str, str | bool] = {
        "summarization": True,
        "summary_model": "conversational",
        "summary_type": "bullets_verbose",
        "speaker_labels": True
    }



    uploaded_file_url = upload_local_file(file.file, ASSEMBLY_AI_KEY)
    data, err, sentences, paragraphs = get_transcription(uploaded_file_url, assembly_request_body, ASSEMBLY_AI_KEY)
    return data


@app.get("/")
async def root():
    return {"message": "Hello World"}