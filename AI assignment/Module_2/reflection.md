# Reflection Report – Module 2

## 1. Overview

In this module, I built a CRUD REST API using FastAPI with in-memory storage. 
The application supports Create, Read, Update, and Delete operations for an Item model.

I used AI tools to assist in debugging, improving code quality, and generating documentation.

---

## 2. How AI Helped in Debugging

AI helped identify improvements in my initial implementation. 

Specifically:
- Suggested using HTTPException instead of returning error dictionaries.
- Recommended proper REST status codes such as 404 for missing items and 201 for successful creation.
- Helped diagnose validation issues related to the Pydantic model.

AI significantly reduced debugging time by quickly explaining the cause of errors and suggesting structured fixes.

---

## 3. How AI Helped in Documentation

AI was very effective in generating:
- Professional docstrings
- Structured API documentation
- Example curl commands
- Example JSON responses

This saved time and helped create a well-organized README file that clearly explains how to use the API.

---

## 4. Limitations of AI

Although AI provided useful suggestions, I had to:
- Manually verify all suggested changes.
- Ensure status codes followed REST best practices.
- Test the API after applying changes.

AI suggestions were helpful but still required developer validation.

---

## 5. Key Learnings

Through this module, I learned:

- How to write effective prompts for debugging.
- How AI can accelerate development but not replace critical thinking.
- The importance of verifying AI-generated code.
- How to use AI as a development assistant rather than relying on it blindly.

Overall, this module helped me understand practical AI-assisted software development.