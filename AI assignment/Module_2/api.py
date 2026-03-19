"""
Simple CRUD FastAPI application.

Endpoints:
  - GET  /               API status
  - GET  /items          Get all items
  - POST /items/{id}     Create item
  - GET  /items/{id}     Read item
  - PUT  /items/{id}     Update item
  - DELETE /items/{id}   Delete item
"""

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory storage
items = {}

# Item model
class Item(BaseModel):
    name: str
    description: str
    price: float


# Root endpoint
@app.get("/")
def home():
    return {"message": "FastAPI CRUD API is running"}


# Get all items
@app.get("/items")
def get_items():
    return items


# Create item
@app.post("/items/{item_id}")
def create_item(item_id: int, item: Item):
    items[item_id] = item
    return {"message": "Item created", "item": item}


# Read item
@app.get("/items/{item_id}")
def read_item(item_id: int):
    if item_id not in items:
        raise HTTPException(status_code=404, detail="Item not found")
    return items[item_id]


# Update item
@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
    if item_id not in items:
        raise HTTPException(status_code=404, detail="Item not found")
    items[item_id] = item
    return {"message": "Item updated", "item": item}


# Delete item
@app.delete("/items/{item_id}")
def delete_item(item_id: int):
    if item_id not in items:
        raise HTTPException(status_code=404, detail="Item not found")
    deleted = items.pop(item_id)
    return {"message": "Item deleted", "item": deleted}