# React + Express Hello World with Docker & Render.com

## Overview
This project is a minimal full-stack app with a React frontend and an Express backend, containerized with Docker, and ready for CI/CD deployment to Render.com via GitHub Actions.

## Project Structure
- `/backend` — Express server (API)
- `/frontend` — React app (UI)
- `Dockerfile` — Multi-stage build for frontend and backend
- `.github/workflows/deploy.yml` — CI/CD pipeline

## Local Development
1. Install dependencies in both `backend` and `frontend`:
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```
2. Start backend:
   ```bash
   cd backend && npm run dev
   ```
3. Start frontend:
   ```bash
   cd frontend && npm start
   ```
4. Frontend will proxy `/api` requests to backend for local development.

## Docker Usage
To build and run the app with Docker:
```bash
docker build -t hello-fullstack .
docker run -p 3000:3000 hello-fullstack
```

## Render.com Deployment
### 1. Prepare Render.com
- Create a Render account at https://render.com/
- Click "New" → "Web Service"
- Connect your GitHub repo
- Set **Environment** to `Docker`
- Set **Dockerfile Path** to `Dockerfile`
- Ensure your backend listens on port `$PORT` (Render sets this env var)
- (Optional) Add environment variables as needed

### 2. GitHub Actions Workflow
- The workflow will:
  - Build the Docker image
  - Push to GitHub Container Registry
  - Trigger a deploy on Render.com (via deploy hook or auto-deploy)
- You must add the following secrets to your GitHub repo:
  - `CR_PAT`: GitHub Container Registry token
  - `RENDER_DEPLOY_HOOK`: (if using deploy hook)

### 3. Manual Deploy (Optional)
- You can trigger a manual deploy from the Render dashboard if needed.

## Troubleshooting
- Check Render logs for build or runtime errors
- Ensure the backend listens on the correct port
- Confirm secrets are set in GitHub for workflow

---
