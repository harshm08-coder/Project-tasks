# Technical Architecture Documentation – AI Resume Analyzer

## 1. Overview

The **AI Resume Analyzer** is a web-based application designed to analyze resumes using AI models (Groq/OpenAI). The application accepts resumes either via text input or file upload and provides a structured analysis highlighting strengths, weaknesses, missing skills, and improvement suggestions.

### Key Features

* Accepts resume text or file upload (.pdf, .docx, .txt)
* AI-based resume analysis
* Markdown-to-HTML rendering for professional display
* Responsive frontend with table and color-coded results
* End-to-end FastAPI backend integration

---

## 2. System Components

### 2.1 Frontend

* **Technology:** HTML, CSS, JavaScript
* **Responsibilities:**

  * User interface for text input and file upload
  * Send requests to backend endpoints (`/analyze` and `/analyze-file`)
  * Render AI output using `marked.js` for tables, headings, and formatting

### 2.2 Backend

* **Technology:** Python, FastAPI
* **Responsibilities:**

  * Accept requests from frontend
  * Parse uploaded files and extract text (PDF, DOCX, TXT)
  * Call AI service for resume analysis
  * Return structured Markdown response with analysis and response time

### 2.3 AI Service

* **Technology:** Groq or OpenAI GPT
* **Responsibilities:**

  * Analyze resume content
  * Generate structured response including strengths, weaknesses, missing skills, and suggestions

### 2.4 File Processing

* **PDF:** `pdfplumber`
* **DOCX:** `python-docx`
* **TXT:** Standard UTF-8 decoding
* Handles text extraction for AI analysis

---

## 3. Data Flow Diagram

```
+----------------+        POST /analyze /analyze-file      +-------------+
|                | --------------------------------------> |             |
|    Frontend    |                                         |   Backend   |
|  (HTML/CSS/JS) | <-------------------------------------- |  (FastAPI)  |
|                |          JSON response / Markdown       |             |
+----------------+                                         +------+------+
                                                                  |
                                                                  |
                                                          Text extraction &
                                                           AI analysis call
                                                                  |
                                                                  v
                                                             +--------+
                                                             |  AI    |
                                                             |Service |
                                                             +--------+
```

---

## 4. API Endpoints

| Endpoint   | Method | Description              | Request Type | Response |
| ---------- | ------ | ------------------------ | ------------ | -------- |
| `/analyze` | POST   | Analyze text-based resum |              |          |

**End of Architecture document**