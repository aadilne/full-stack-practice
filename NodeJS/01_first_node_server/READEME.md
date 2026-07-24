# HTTP - createServer()

## Purpose

`http` module ka use Node.js me server banane ke liye hota hai.

---

## Syntax

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
   // Request Handle
});

server.listen(PORT);
```

---

## Samjho

- `require("http")` → HTTP module ko import karta hai.
- `createServer()` → Naya server banata hai.
- `req` → Client ki request ki information deta hai.
- `res` → Client ko response bhejne ke liye use hota hai.
- `listen()` → Server ko start karta hai aur diye gaye port par chalata hai.

---

## Important

- `3000` → Port Number hai.
- Server tab tak chalta rahega jab tak tum use band (`Ctrl + C`) nahi karte.
- Browser se `http://localhost:3000` open karoge to request server tak aayegi.

---

## Output


Server running at http://localhost:3000
