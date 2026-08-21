# Express.js

An npm package that acts as a **framework** on top of Node.js.
It manages the full lifecycle: receiving a request â†’ routing â†’ sending a response.

## Basic Setup

```bash
npm i express
```

```js
const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('hii champion');
});

app.listen(3000);
// Open localhost:3000 -> "hii champion"
```

## What is a Route?
Everything after the domain name in a URL is a route.
Example: in `youtube.com/watch?v=xyz`, the route is `/watch`.

```js
app.get('/profile', function(req, res) {
  res.send('hi welcome to profile');
});
// localhost:3000/profile -> "hi welcome to profile"
```

## HTTP Methods in Express

| Method | Usage |
|---|---|
| `app.get()` | Read data |
| `app.post()` | Create data |
| `app.put()` | Replace entire resource |
| `app.patch()` | Partially update resource |
| `app.delete()` | Delete resource |

## nodemon
Install once globally â€” auto-restarts server on file save.
```bash
npm i nodemon -g
nodemon app.js
```

---

## Middleware
A function that runs between the request arriving and the route handler running.

```
Request â†’ [Middleware] â†’ Route Handler â†’ Response
```

### 1. Application-Level Middleware (runs on ALL routes)
```js
app.use(function(req, res, next) {
  console.log("middleware ran");
  next(); // pass control to the next handler
});
```

### 2. Router-Level Middleware (runs on specific routes only)
Useful for: protecting admin pages, validating login data.

---

## Error Handling
Express has a special 4-argument middleware for errors:

```js
app.get('/profile', function(req, res, next) {
  return next(new Error('something is wrong'));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('something broke');
});
```

---

## Form Handling
When a form is submitted, the data arrives encoded â€” not plain text.
Use parsers to make it readable:

```js
app.use(express.json());                         // for JSON (fetch/React)
app.use(express.urlencoded({ extended: true })); // for HTML form submissions
```

---

## Sessions & Cookies

**Cookies** â€” small strings stored on the user's browser. Sent automatically with every request to the same domain, so the server can recognize returning users without making them log in every time.

**Sessions** â€” the active connection state between the user and the server. The server stores session data; the browser holds only a session ID in a cookie.
