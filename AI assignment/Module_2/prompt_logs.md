# AI Prompt Logs – Module 2

## 1. Code Review & REST Improvement

**Date:** 2026-03-02  
**Purpose:** Improve API to follow REST best practices  

**Prompt:**
Review my FastAPI CRUD API and improve it to follow proper REST standards.
Add correct HTTP status codes and proper error handling.

Here is my code:
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# Sample data storage
items = {}

class Item(BaseModel):
    name: str
    description: str
    price: float

# Create
@app.post("/items/{item_id}")
def create_item(item_id: int, item: Item):
    items[item_id] = item
    return items[item_id]

# Read
@app.get("/items/{item_id}")
def read_item(item_id: int):
    return items.get(item_id, {"error": "Item not found"})

# Update
@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
    if item_id in items:
        items[item_id] = item
        return items[item_id]
    return {"error": "Item not found"}

# Delete
@app.delete("/items/{item_id}")
def delete_item(item_id: int):
    return items.pop(item_id, {"error": "Item not found"})

**AI Response (Summary):**
- Suggested using HTTPException for missing items
- Recommended returning 404 instead of HTTP 200 for errors
- Suggested using HTTP 201 for POST
- Improved typing and docstrings

**Action Taken:**
Updated the API to use:
- HTTPException(status_code=404)
- status.HTTP_201_CREATED for POST
- Improved docstrings and structure

---

## 2. Debugging Validation Issue

**Date:** 2026-03-02  
**Purpose:** Fix POST request validation error  

**Prompt:**
When sending a POST request I get 422 Unprocessable Entity.
Here is my Item model and endpoint code:
class Item(BaseModel):
    name: str
    description: str
    price: float

@app.post("/items/{item_id}")
def create_item(item_id: int, item: Item):
    items[item_id] = item
    return item

Why is this happening?

**AI Response (Summary):**
Explained that FastAPI validation fails when request body
does not match the Pydantic model structure.

**Action Taken:**
Corrected the JSON request body to match the Item schema.

---

## 3. Generate API Documentation

**Date:** 2026-03-02  
**Purpose:** Create professional project documentation  

**Prompt:**
Write API documentation for this CRUD FastAPI code with
examples of requests and responses.

"""Simple CRUD FastAPI application.

This module exposes a tiny in-memory CRUD API for an `Item` model.

Endpoints:
  - POST /items/{item_id}  Create or replace an item
  - GET  /items/{item_id}  Retrieve an item
  - PUT  /items/{item_id}  Update/replace an item
  - DELETE /items/{item_id} Remove an item

Notes:
  - Storage is an in-memory `dict` named `items` keyed by `item_id`.
  - Handlers currently return dictionaries and do not raise HTTP exceptions
    for missing items (they return an error object with HTTP 200). See
    the project docs for recommended improvements.
"""

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# Sample in-memory data storage (keys: int item_id, values: Item)
items = {}


class Item(BaseModel):
    """Pydantic model describing an item.

    Attributes
    - name: short name of the item
    - description: longer, human-readable description
    - price: item price as a float
    """


@app.post("/items/{item_id}")
def create_item(item_id: int, item: Item):
    """Create or replace an item at the given `item_id`.

    Path parameters
    - item_id (int): identifier for the item to create or replace

    Request body
    - item (Item): JSON body matching the `Item` model

    Returns
    - The stored `Item` as a JSON object.

    Behavior
    - If an item already exists at `item_id`, it will be replaced.
    - The handler returns the created item with HTTP 200.
    """
    items[item_id] = item
    return items[item_id]


@app.get("/items/{item_id}")
def read_item(item_id: int):
    """Retrieve the item stored at `item_id`.

    Path parameters
    - item_id (int): identifier for the item to retrieve

    Returns
    - If the item exists: the `Item` as JSON (HTTP 200).
    - If the item is not found: a JSON object `{"error": "Item not found"}`.

    Note
    - Currently the function returns a 200 response in the "not found"
      case (an error object). For typical RESTful behavior, consider
      raising `HTTPException(status_code=404, detail="Item not found")`.
    """
    return items.get(item_id, {"error": "Item not found"})


@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
    """Update (replace) the existing item at `item_id`.

    Path parameters
    - item_id (int): identifier for the item to update

    Request body
    - item (Item): JSON body with replacement data

    Returns
    - If the item exists: the updated `Item` as JSON (HTTP 200).
    - If the item does not exist: `{"error": "Item not found"}` (HTTP 200).

    Behavior
    - This endpoint performs a full replacement of the stored item.
    """
    if item_id in items:
        items[item_id] = item
        return items[item_id]
    return {"error": "Item not found"}


@app.delete("/items/{item_id}")
def delete_item(item_id: int):
    """Delete the item at `item_id` and return it.

    Path parameters
    - item_id (int): identifier for the item to delete

    Returns
    - If the item existed: the deleted `Item` as JSON (HTTP 200).
    - If not found: `{"error": "Item not found"}` (HTTP 200).

    Behavior
    - Removes the item from in-memory storage and returns the removed value.
    """
    return items.pop(item_id, {"error": "Item not found"})


**AI Response (Summary):**
Generated:
- Overview section
- Endpoint explanations
- Example curl commands
- Example JSON responses
- Notes on improvements

**Action Taken:**
Saved the generated content as README.md
and updated status codes to match final implementation.