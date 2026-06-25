first let's learn few things separately:\
\
pehle-\
                                       ```npm init -y```\
                                       ```npm jsonwebtoken bcrypt //installing these two packages```\
                                       create app.js and ```npm i express```
1. COOKIE KAISE SET KARTE HAI: \


## SUMMARY:
   
Authentication: The process of verifying who the user is (e.g., checking email and password).\
Authorization: The process of determining what a verified user is allowed to do (e.g., a regular user can view products, but only an admin can change prices).\
The Stateless Problem: Servers forget users after every request. To fix this, the server must issue a "token" or "key" after login so the user doesn't have to re-enter credentials for every action.\
Three Key Technical Pillars\
## 1. Setting and Reading Cookies\
Purpose: To store a session token on the user's browser so the server can recognize them in subsequent requests.\
How it works:\
Setting: Use res.cookie('name', 'value') in Express to send data to the browser.\
Reading: Install the cookie-parser middleware and use req.cookies to access the data on the server.\
Behavior: Once set, cookies are automatically attached to every request to that domain, unlike headers which must be manually added.\
### 2. Password Encryption with Bcrypt\ (A. How credentials travel)
Purpose: Never store passwords in plain text. If a database is hacked, encrypted passwords remain secure.\
The Process:\
Hashing: we use hashing algorithms like bcrypt or Argon2. to turn Password123 into an irreversible string of gibberish (e.g., $2b$10$X7...).\ Use bcrypt.genSalt() to create a random string, then bcrypt.hash() to convert the plain password into a secure, unreadable hash.\
Salting: To prevent hackers from guessing common passwords using pre-computed tables (Rainbow Tables), the backend adds a unique random string of characters (a "salt") to the password before hashing it.
Verification: You cannot "decrypt" a hash. Instead, use bcrypt.compare() to check if the plain text password provided by the user matches the stored hash.\
Algorithm: Typically uses the Bcrypt algorithm with 10 salt rounds.\

### B. Single Sign-On (SSO) & OAuth 2.0
Users hate creating new passwords. As a developer (and future PM), you’ll frequently use OAuth 2.0 / OpenID Connect (OIDC).

This is the "Login with Google" or "Login with GitHub" button.

How it works: Your backend redirects the user to Google. Google verifies who they are, and then sends your backend a secure token proving the user's identity. Your database never touches their actual password.\


## 2. Managing State: How the Server "Remembers" You
HTTP (the protocol the internet runs on) is stateless. This means every single request an API receives is treated like a brand-new interaction from a stranger. The server immediately forgets who you are the second it sends back data.

To fix this, the backend must hand the client a "ticket" upon a successful login. There are two primary ways backends manage this state:

Strategy 1: Session-Based Authentication (Stateful)
How it works: When you log in, the backend creates a unique Session ID and saves it in its memory or a quick database (like Redis). It sends this ID back to the user's browser, which stores it in a Cookie.

For every future request, the browser automatically attaches that cookie. The server looks at the ID, checks its database to see who it belongs to, and grants access.

Pros: Very secure. If you want to log a user out remotely (e.g., "Log out of all devices"), the backend just deletes the session from its database.

Cons: Harder to scale. If you have 5 server instances running, they all need access to that central session database.

Strategy 2: Token-Based Authentication (Stateless / JWT)
How it works: When you log in, the backend generates a JSON Web Token (JWT). A JWT contains user data encoded into a compact string (e.g., { "userId": 123, "role": "admin" }) and is digitally signed by the server using a secret key.

The backend hands this token to the client. The client stores it (usually in local storage or a cookie) and sends it in the HTTP header (Authorization: Bearer <token>) for every API call.

The backend doesn't check a database; it just decodes the token and verifies the digital signature. If the signature matches, the server trusts the data inside it implicitly.

Pros: Highly scalable. Servers don't need to remember anything; they just validate the signature.

Cons: Hard to revoke. If a JWT is stolen, it remains valid until its expiration time passes, because the server has no central list to delete it from.

💡 The Industry Standard Fix: Modern apps use a combination. An Access Token (short-lived JWT, e.g., 15 minutes) to quickly access APIs, and a Refresh Token (long-lived, stored securely in the database) used to request a new access token when the old one expires.

## JSON Web Tokens (JWT)
Purpose: To create a secure, stateless way to carry user identity data (like email) between the client and server.\
Structure: A JWT consists of three parts:\
Header: Algorithm details (e.g., HS256).\
Payload: The actual data (e.g., user email).\
Signature: Ensures the token hasn't been tampered with.\
Workflow:\
Sign: After successful login, the server creates a token using jwt.sign(payload, secret) and sends it to the browser (usually stored in a cookie).\
Verify: On subsequent requests, the server extracts the token and uses jwt.verify(token, secret) to decode the payload and identify the user without needing a database lookup.\
Summary of the Workflow\
User submits credentials.\
Server verifies them using Bcrypt.\
If valid, the server generates a JWT containing user data.\
The server saves this token in a Cookie sent to the browser.\
For future requests, the browser automatically sends the cookie.\
The server verifies the JWT to authorize the user's actions.

## Authorization (What are you allowed to do?)
Once the backend knows who you are, it must enforce boundaries. You don’t want a regular user deleting another user’s profile or accessing the admin dashboard.

There are two primary architectures used to implement authorization:

### A. Role-Based Access Control (RBAC)
This is the most common approach. Users are assigned specific Roles (e.g., Admin, Editor, User).

The Logic: Inside your code, you protect routes with middleware that checks the user's role.

Example: If a request hits DELETE /api/posts/45, the backend checks: if (user.role !== 'Admin') return 403 Forbidden.

### B. Attribute-Based Access Control (ABAC) or Relationship-Based
Sometimes roles aren't granular enough. What if a regular User wants to edit a post, but only the post they wrote?

The Logic: The backend checks individual attributes or data ownership.

Example: if (post.authorId !== user.id) return 403 Forbidden.

## 4. Key Security Risks Every Backend Dev Must Prevent
When building auth systems, you will constantly defend against these common vulnerabilities:

Brute Force Attacks: Hackers using bots to try millions of password combinations.

Fix: Implement Rate Limiting (e.g., block an IP address if they fail a login 5 times in a row).

Cross-Site Scripting (XSS): Hackers injecting malicious JavaScript into a website to steal JWT tokens stored in LocalStorage.

Fix: Store sensitive authentication tokens in HttpOnly Cookies, which JavaScript cannot read.

Cross-Site Request Forgery (CSRF): An attacker tricks a logged-in user's browser into sending an authorized request to your backend without their knowledge.

Fix: Use CSRF Tokens or strict SameSite cookie settings.
   
