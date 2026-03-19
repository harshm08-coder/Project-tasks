import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI(
    api_key=os.getenv("GROQ_API_KEY"),
    base_url="https://api.groq.com/openai/v1"
)

def analyze_resume(resume_text: str):

    response = client.chat.completions.create(

        model="openai/gpt-oss-20b",

        messages=[
            {
                "role": "system",
                "content": "You are a professional HR recruiter and ATS resume screening expert."
            },
            {
                "role": "user",
                "content": f"""
Analyze this resume.

Return in format:

ATS Score: (out of 100)

### Strengths
- bullet points

### Weaknesses
- bullet points

### Missing Technical Skills
- bullet points

### Suggestions
- bullet points

Resume:
{resume_text}
"""
            }
        ]

    )

    return response.choices[0].message.content