# Prompt Strategy – AI Resume Analyzer

## 1. Overview

The **Prompt Strategy** document outlines the methodology used to instruct the AI (Groq/OpenAI) to generate structured and actionable analysis of resumes. Effective prompt design ensures accurate, consistent, and useful results.

---

## 2. Prompt Objectives

The AI is instructed to perform the following tasks:

1. **Identify Strengths** – Highlight technical skills, project achievements, and relevant experience.
2. **Identify Weaknesses** – Point out gaps, missing quantifiable results, or soft skills.
3. **Highlight Missing Technical Skills** – Suggest skills commonly expected for the target role.
4. **Provide Suggestions for Improvement** – Recommend concrete actions to improve the resume.

---

## 3. Prompt Structure

### 3.1 System Prompt

Sets the AI’s role and perspective:

```
You are a professional HR recruiter with experience in evaluating mid-level software engineer resumes.
Provide structured and concise feedback, organized into tables and sections.
```

### 3.2 User Prompt

Contains the resume content and instructions:

```
Analyze the resume and provide:
1. Strengths
2. Weaknesses
3. Missing technical skills
4. Suggestions for improvement

Resume:
<insert_resume_text_here>
```

### 3.3 Expected Output Format

* **Markdown tables** for strengths, weaknesses, and missing skills
* **Headings** (`##` or `###`) for each section
* Bullet points or numbered lists for actionable suggestions
* Example:

```
## 1. Strengths
| Area | Details |
|------|---------|
| Core Technical Stack | Solid Python, React, Node.js skills |
```

---

## 4. Best Practices in Prompting

1. **Be Explicit:** Clearly state the sections you want in the analysis.
2. **Role Definition:** Use system prompts to define AI as an HR professional.
3. **Markdown Output:** Specify Markdown tables for structured display in frontend.
4. **Conciseness:** Ask AI to keep each section clear and minimalistic.
5. **Contextual Awareness:** Include job level (e.g., mid-level) and stack to guide recommendations.

---

## 5. Handling File Uploads

* Extract text from uploaded PDF/DOCX/TXT.
* Insert the extracted text into the prompt in place of `<insert_resume_text_here>`.
* Maintain same prompt structure to ensure consistency of AI output.

---

## 6. Prompt Example

**System Prompt:**

```
You are a professional HR recruiter.
Provide structured resume feedback in Markdown format with tables and headings.
```

**User Prompt:**

```
Analyze the resume and provide:
1. Strengths
2. Weaknesses
3. Missing technical skills
4. Suggestions for improvement

Resume:
John Doe
Software Engineer
Skills: Python, React, Node.js
```

**AI Output (Markdown):**

```
## 1. Strengths
| Area | Details |
|------|---------|
| Core Technical Stack | Solid Python, React, Node.js skills |
...
```

---

## 7. Notes

* Maintain **uniform formatting** for all AI responses.
* Use the **same prompt template** for both text input and file upload.
* Ensure AI output can be **directly rendered in frontend** using `marked.js`.

---

**End of Prompt Strategy Document**
