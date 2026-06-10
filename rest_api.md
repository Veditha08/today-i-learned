# REST API Design

## Principles
- Stateless: each request contains all needed info
- Uniform interface: consistent URL patterns
- Client-Server separation
- Cacheable responses

## HTTP Methods
GET: read resource (idempotent)
POST: create resource
PUT: full update (idempotent)
PATCH: partial update
DELETE: remove resource (idempotent)

## HTTP Status Codes
2xx Success: 200 OK, 201 Created, 204 No Content
3xx Redirect: 301 Moved, 304 Not Modified
4xx Client Error: 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found
5xx Server Error: 500 Internal Error, 503 Service Unavailable
