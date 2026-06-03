# MongoDB Notes

## What is MongoDB?
- NoSQL document database
- Stores data in BSON (Binary JSON)
- Flexible schema, collections and documents

## CRUD Operations
Create: insertOne(), insertMany()
Read: find(), findOne()
Update: updateOne(), updateMany(), replaceOne()
Delete: deleteOne(), deleteMany()

## Query Operators
Comparison: eq, ne, gt, gte, lt, lte
Logical: and, or, not, nor
Array: in, nin, all, elemMatch

## Aggregation Pipeline
Stages: match, group, project, sort, limit, lookup

## Mongoose ORM

Schema: defines structure and validation
Model: interface for DB operations
Middleware: pre/post hooks for operations

Schema types:
String, Number, Date, Boolean, ObjectId, Array, Mixed

Validation:
required, min, max, minLength, maxLength, enum

Virtuals:
Computed properties not stored in DB.

Populate:
Joins referenced documents - replaces ObjectId with actual document.
