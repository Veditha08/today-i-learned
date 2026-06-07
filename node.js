# Node.js

## What is Node?
- A **runtime environment** to run JavaScript **outside the browser**
- Built on Chrome's **V8 engine**
- Not a programming language, not a framework â€” just a JS runtime

## What is npm?
- Like an App Store for code packages
- You upload your packages, or borrow others'
- Comes bundled with Node

## Node Global Objects
These are available in every Node file (no import needed):

| Object | What it does |
|---|---|
| `__dirname` | Path to the current directory |
| `__filename` | Name of the current file |
| `process` | Info about the environment where code runs |
| `module` | Info about the current module |
| `require` | Function to import other modules (CommonJS) |

## Working with npm

```bash
npm init -y           # create package.json with defaults
node ./filename.js    # run a node file
npm i packagename     # install a package (saves to dependencies)
npm i packagename@1.2 # install a specific version
npm uninstall pkg     # remove a package
```

> **package.json** = the config/metadata file for your entire project. Tracks all dependencies.

## Dependencies vs DevDependencies
- **dependency** â€” packages your app needs to run in production
- **devDependency** â€” only needed during development (e.g., testing tools, linters)

## npm Scripts
Commands you define under `"scripts"` in package.json. Run with `npm run <name>`.
`npm start` and `npm test` don't need the `run` keyword.

```json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
```

## Module System (CommonJS)

```js
// Exporting from a file
module.exports = { greet, helper };

// Importing in another file
const { greet } = require('./utils');
```

## HTTP Module (built-in)

```js
const http = require('http');
const server = http.createServer(function(req, res) {
  res.end("hello");
});
server.listen(3000);
// Go to localhost:3000 -> "hello"
```
