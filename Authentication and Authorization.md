# Authentication & Authorization

## Quick Start Setup

```bash
npm init -y
npm i jsonwebtoken bcrypt
npm i express
# create app.js
```

---

## The Core Difference

| Term | What it means |
|---|---|
| **Authentication** | Verifying *who* the user is (e.g., checking email + password) |
| **Authorization** | Determining *what* a verified user is allowed to do |

**The Stateless Problem:**
HTTP is stateless â€” the server forgets you after every request.
Fix: after login, the server issues a "token" or "key" so you don't re-login every time.

---

## 1. Cookies

**Purpose:** Store a session token in the browser so the server recognizes you on future requests.

```js
res.cookie('name', 'value');        // set a cookie (Express)
// Install cookie-parser, then:
req.cookies.name                    // read a cookie
```

> Once set, cookies are **automatically** sent with every request to that domain â€” unlike headers which must be manually added.

---

## 2. Password Encryption with Bcrypt

Never store passwords in plain text. If the database is compromised, encrypted passwords stay safe.

**How it works:**

1. **Salting** â€” Add a unique random string to the password before hashing (prevents Rainbow Table attacks)
2. **Hashing** â€” Run through bcrypt algorithm (irreversible). `Password123` â†’ `$2b$10$X7...`
3. **Verification** â€” Use `bcrypt.compare()` to check a plain password against the stored hash (you cannot "decrypt")

```js
const salt = await bcrypt.genSalt(10);
const hash = await bcrypt.hash(plainPassword, salt);

const isMatch = await bcrypt.compare(inputPassword, storedHash);
```

---

## 3. Single Sign-On (SSO) & OAuth 2.0

Users hate creating new passwords. OAuth 2.0 powers the **"Login with Google / GitHub"** button.

**How it works:**
1. Your backend redirects the user to Google
2. Google verifies who they are
3. Google sends your backend a secure token proving their identity
4. Your database never touches their real password

---

## 4. Managing State: How the Server "Remembers" You

### Strategy 1 â€” Session-Based (Stateful)
1. On login, server creates a **Session ID** and stores it in memory or Redis
2. Sends the ID back in a cookie
3. On every request, browser sends the cookie; server looks up the session

- âœ… Easy to revoke (just delete session from DB)
- âŒ Harder to scale (all servers need access to session store)

### Strategy 2 â€” Token-Based (Stateless / JWT)
1. On login, server generates a **JWT** (JSON Web Token) containing user data + a digital signature
2. Client stores it and sends it in the `Authorization: Bearer <token>` header
3. Server just validates the signature â€” no DB lookup needed

- âœ… Highly scalable
- âŒ Hard to revoke â€” valid until it expires

**Industry Standard Fix:**
> Use a **short-lived Access Token** (15 min) + a **long-lived Refresh Token** stored securely in the database.

---

## JWT â€” JSON Web Token

**Structure:** `Header.Payload.Signature` (each part is base64-encoded)

| Part | Contains |
|---|---|
| Header | Algorithm type (e.g., HS256, RS256) |
| Payload | Claims: `sub`, `iat`, `exp`, user data |
| Signature | HMAC of header+payload using secret key |

```js
const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '15m' });
const decoded = jwt.verify(token, process.env.JWT_SECRET);
```

**Best Practices:**
- Never store JWT in `localStorage` (XSS risk)
- Use `httpOnly`, `Secure`, `SameSite=Strict` cookies
- Rotate refresh tokens on every use
- Blacklist tokens on logout

---

## Authorization â€” What Are You Allowed to Do?

### A. Role-Based Access Control (RBAC)
Users are assigned roles: Admin, Editor, User.

```js
if (user.role !== 'Admin') return res.status(403).send('Forbidden');
```

### B. Attribute-Based / Relationship-Based Access Control
For cases where roles aren't granular enough (e.g., "edit only your own post"):

```js
if (post.authorId !== user.id) return res.status(403).send('Forbidden');
```

---

## Security Risks to Know

| Attack | What it is | Fix |
|---|---|---|
| **Brute Force** | Bots trying millions of password combinations | Rate limiting â€” block IP after 5 failed attempts |
| **XSS** | Malicious JS injected to steal tokens from localStorage | Store tokens in `httpOnly` cookies |
| **CSRF** | Attacker tricks logged-in browser into sending requests | CSRF tokens + `SameSite` cookie flag |
