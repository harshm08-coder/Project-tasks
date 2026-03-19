# API Integration Proof – AI Resume Analyzer

## Project Overview

**AI Resume Analyzer** is a web application that allows users to analyze resumes using an AI service (Groq/OpenAI). Users can:

* Paste resume text or upload a resume file (`.pdf`, `.docx`, `.txt`)
* Receive a detailed analysis including:

  * Strengths
  * Weaknesses
  * Missing technical skills
  * Suggestions for improvement

The frontend communicates with a FastAPI backend which integrates the AI service.

---

## Backend API Endpoints

### 1. Analyze Resume Text

**Endpoint:** `/analyze`
**Method:** `POST`
**Content-Type:** `application/json`

**Request Body Example:**

```json
{
    "text": "John Doe\nSoftware Engineer\nSkills: Python, React, Node.js"
}
```

**Response Example:**

```json
{
    "analysis": "Candidate: John Doe\nPosition Targeted: Mid-level Software Engineer...\n1. Strengths: ...",
    "response_time": 1.98
}
```

---

### 2. Analyze Resume File

**Endpoint:** `/analyze-file`
**Method:** `POST`
**Content-Type:** `multipart/form-data`

**Request Example (using `curl`):**

```bash
curl -X POST "http://127.0.0.1:8000/analyze-file" \
  -F "file=@John_Doe_Resume.pdf"
```

**Response Example:**

```json
{
    "analysis": "Candidate: John Doe\nPosition Targeted: Mid-level Software Engineer...\n1. Strengths: ...",
    "response_time": 2.15
}
```

**Supported File Types:** `.pdf`, `.docx`, `.txt`

---

## Frontend Integration

* Users upload a resume file or paste resume text.
* JavaScript fetch API sends data to FastAPI endpoints.
* AI analysis is returned as Markdown and rendered in HTML using [Marked.js](https://marked.js.org/).
* Tables, headings, and lists are styled with CSS for professional presentation.

**Example Frontend Fetch Call (File Upload):**

```javascript
const formData = new FormData();
formData.append("file", selectedFile);

const response = await fetch("http://127.0.0.1:8000/analyze-file", {
  method: "POST",
  body: formData
});
const data = await response.json();
console.log(data.analysis);
```

---

## Sample Analysis Output

| Section        | Example                                                              |
| -------------- | -------------------------------------------------------------------- |
| Candidate      | John Doe                                                             |
| Strengths      | Solid Python/React skills, Full-stack experience, Project highlights |
| Weaknesses     | Lack of quantifiable metrics, Sparse experience detail               |
| Missing Skills | TypeScript, GraphQL, Docker, CI/CD                                   |
| Suggestions    | Add summary, quantify achievements, include GitHub/LinkedIn links    |

---

## Usage Proof

1. Frontend displays **Choose File** button and analysis result box.
2. User uploads a resume → AI analysis appears in **styled tables and sections**.
3. Response time and output show API integration works end-to-end.

**Screenshot Placeholder:**
*(Insert screenshot of the frontend showing AI analysis here)*

---

## Notes

* Backend uses FastAPI with CORS enabled for frontend communication.
* AI service can be Groq or OpenAI GPT model.
* Markdown output is converted to HTML with `marked.js` for clean tables and headings.
