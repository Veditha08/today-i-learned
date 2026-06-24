first let's learn few things separately:\
\
pehle-\
                                       ```npm init -y```\
                                       ```npm jsonwebtoken bcrypt //installing these two packages```\
                                       create app.js and ```npm i express```\\
1. COOKIE KAISE SET KARTE HAI: \\\\\


SUMMARY:
   
Authentication: The process of verifying who the user is (e.g., checking email and password).\
Authorization: The process of determining what a verified user is allowed to do (e.g., a regular user can view products, but only an admin can change prices).\
The Stateless Problem: Servers forget users after every request. To fix this, the server must issue a "token" or "key" after login so the user doesn't have to re-enter credentials for every action.\
Three Key Technical Pillars\
1. Setting and Reading Cookies\
Purpose: To store a session token on the user's browser so the server can recognize them in subsequent requests.\
How it works:\
Setting: Use res.cookie('name', 'value') in Express to send data to the browser.\
Reading: Install the cookie-parser middleware and use req.cookies to access the data on the server.\
Behavior: Once set, cookies are automatically attached to every request to that domain, unlike headers which must be manually added.\
2. Password Encryption with Bcrypt\
Purpose: Never store passwords in plain text. If a database is hacked, encrypted passwords remain secure.\
The Process:\
Hashing: Use bcrypt.genSalt() to create a random string, then bcrypt.hash() to convert the plain password into a secure, unreadable hash.\
Verification: You cannot "decrypt" a hash. Instead, use bcrypt.compare() to check if the plain text password provided by the user matches the stored hash.\
Algorithm: Typically uses the Bcrypt algorithm with 10 salt rounds.\
3. JSON Web Tokens (JWT)\
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
The server verifies the JWT to authorize the user's actions.\
   
