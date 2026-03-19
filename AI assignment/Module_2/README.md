# API Documentation — CRUD FastAPI App

Overview
- Base URL: `http://127.0.0.1:8000`
- App module: `api.py` (the ASGI app object is `app`)

Run the server
```bash
uvicorn api:app --reload
```

Data model (Item)
- `name`: string
- `description`: string
- `price`: float

Endpoints

- **Create (POST)**: `/items/{item_id}`
  - Description: Create or replace the item at `item_id` with the JSON body.
  - Request body: JSON matching the `Item` model.
  - Example (curl):
    ```bash
    curl -i -X POST "http://127.0.0.1:8000/items/1" \
      -H "Content-Type: application/json" \
      -d '{"name":"A","description":"B","price":9.99}'
    ```
  - Response: 200 OK
    ```json
    {"name":"A","description":"B","price":9.99}
    ```

- **Read (GET)**: `/items/{item_id}`
  - Description: Return the item if present, otherwise returns an error object.
  - Example (curl):
    ```bash
    curl -i "http://127.0.0.1:8000/items/1"
    ```
  - Responses:
    - If exists: 200 OK
      ```json
      {"name":"A","description":"B","price":9.99}
      ```
    - If missing: 200 OK (note: code returns an error object but still HTTP 200)
      ```json
      {"error":"Item not found"}
      ```

- **Update (PUT)**: `/items/{item_id}`
  - Description: Replace the existing item at `item_id` with the JSON body. If `item_id` does not exist, returns an error object.
  - Example (curl):
    ```bash
    curl -i -X PUT "http://127.0.0.1:8000/items/1" \
      -H "Content-Type: application/json" \
      -d '{"name":"A updated","description":"B updated","price":19.99}'
    ```
  - Responses:
    - If exists: 200 OK with updated item JSON.
    - If missing: 200 OK with `{"error":"Item not found"}`.

- **Delete (DELETE)**: `/items/{item_id}`
  - Description: Remove and return the item at `item_id`, or an error object if not found.
  - Example (curl):
    ```bash
    curl -i -X DELETE "http://127.0.0.1:8000/items/1"
    ```
  - Responses:
    - If existed: 200 OK with deleted item JSON.
    - If missing: 200 OK with `{"error":"Item not found"}`.

Notes and recommendations
- Current behavior: the handlers return plain dicts and always respond with HTTP 200, even for "not found" cases. To follow REST conventions, raise `HTTPException(status_code=404, detail="Item not found")` when an item is missing.

Quick Python test (using FastAPI TestClient)
```python
from fastapi.testclient import TestClient
from api import app

client = TestClient(app)
resp = client.post('/items/1', json={'name':'A','description':'B','price':9.99})
print(resp.status_code, resp.json())

resp = client.get('/items/1')
print(resp.status_code, resp.json())
```

Where to look
- File: [api.py](api.py)
