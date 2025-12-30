# Travel App Backend (Node.js + Express + MongoDB)

This is a complete backend for the Travel App with authentication (signup/login) using JWT.

## Features
- Signup (create user)
- Login (returns JWT)
- Protected route: GET /api/user/me
- Uses MongoDB (Mongoose)
- CORS configured for the React frontend

## Quick start

1. Install dependencies:
```bash
npm install
```

2. Copy `.env.example` to `.env` and fill values:
- `MONGO_URI` — your MongoDB connection string (MongoDB Atlas recommended)
- `JWT_SECRET` — a random secret string
- `PORT` — port for backend (default 5000)
- `CLIENT_URL` — frontend URL (default http://localhost:5173)

3. Start dev server:
```bash
npm run dev
```

4. API endpoints:
- `POST /api/auth/signup` — body: `{ name, email, password }`
- `POST /api/auth/login` — body: `{ email, password }`
- `GET /api/user/me` — header: `Authorization: Bearer <token>`

## Connect with React frontend
From the frontend (React), call the endpoints at `http://localhost:5000/api/auth/login` and `.../signup`.
After login store the returned token in `localStorage` and include `Authorization: Bearer <token>` header for protected calls.

Example:
```js
// Signup
await fetch("http://localhost:5000/api/auth/signup", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name, email, password })
});

// Login
const res = await fetch("http://localhost:5000/api/auth/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email, password })
});
const data = await res.json();
localStorage.setItem("token", data.token);
```

## Notes
- Use MongoDB Atlas if you don't want to run a local MongoDB instance.
- Keep `JWT_SECRET` safe and do not commit `.env` to version control.
