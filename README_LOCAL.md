# Local Development: React + Express Hello World

This guide explains how to build and run the project locally, both with and without Docker.

---

## 1. Prerequisites
- Node.js (v18 or newer recommended)
- npm (comes with Node.js)
- (Optional) Docker

---

## 2. Install Dependencies
Open a terminal in the project root and run:

```bash
cd backend && npm install
cd ../frontend && npm install
```

---

## 3. Run Backend (Express)
In one terminal:
```bash
cd backend
npm run dev
```
- The backend will start on http://localhost:3001
- Endpoint: http://localhost:3001/api/health

---

## 4. Run Frontend (React)
In a separate terminal:
```bash
cd frontend
npm start
```
- The frontend will start on http://localhost:3000
- It will proxy `/api` requests to the backend

---

## 5. Test the App
- Open http://localhost:3000 in your browser
- You should see one of:
  - `I am healthy` (if backend is up)
  - `I am down` (if backend is not reachable)
  - `I got an error` (if backend returns error)

---

## 6. Run with Docker (Optional)
To build and run the app using Docker:

```bash
docker build -t hello-fullstack .
docker run -p 3000:3000 hello-fullstack
```
- The app will be available at http://localhost:3000
- Both frontend and backend are served from the same container

---

## 7. Troubleshooting
- If ports are in use, stop other apps or change the ports in `backend/index.js` and `frontend/webpack.config.js`
- If you change frontend code, restart the frontend dev server
- For Docker, rebuild the image after code changes

---

**Note:**
After you have successfully deployed and tested the production setup (backend serving from the frontend/build directory), you should revert your backend to the development setup (serving from frontend/public or using the React dev server) for easier local development. This allows for hot reloading and a better developer experience.
