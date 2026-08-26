# Database + Backend Setup

## Two Servers in the Backend

| Server | Role |
|---|---|
| **Application Server** | Handles routes, processes requests, runs business logic |
| **Database Server** | Stores data (e.g., MongoDB) |

## MongoDB Structure
- A database contains **collections** (like tables in SQL)
- Each collection holds **documents** (like rows, but in flexible JSON format)
- No fixed schema â€” each document can have different fields

**mongod** â€” the actual MongoDB engine. Stores data and handles query logic.
Clients like MongoDB Compass, `mongosh`, or your app all connect to the same mongod, so data stays consistent across devices.

> Like leaving a YouTube comment on your phone and seeing it on your laptop â€” same database, different clients.

## CRUD Operations

| Operation | What it does | Mongoose method |
|---|---|---|
| **Create** | Insert a new document | `Model.create()` |
| **Read** | Fetch documents | `Model.find()`, `Model.findById()` |
| **Update** | Modify existing documents | `Model.findByIdAndUpdate()` |
| **Delete** | Remove documents | `Model.findByIdAndDelete()` |

### Mongoose Flow

```
mongoose.connect(...)         â†’  Database is created (if not exists)
mongoose.model('name', schema) â†’  Collection is created
model.create({...})           â†’  Document is created
```

## Project Setup (usermodel.js)

```bash
npm i mongoose
```

```js
const mongoose = require('mongoose');

// Connect to local MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mydbname');

// Define a schema â€” what every user document must look like
const userSchema = mongoose.Schema({
  name: String,
  id: String,
  email: String,
});

// Export the model so routes can use it for CRUD
module.exports = mongoose.model('user', userSchema);
// MongoDB will auto-create a collection called "users" (pluralized)
```
