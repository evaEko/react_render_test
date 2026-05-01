# ---------- Build frontend ----------
FROM node:20-alpine AS frontend-build
WORKDIR /app/frontend
COPY frontend/package.json frontend/package-lock.json* ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# ---------- Build backend ----------
FROM node:20-alpine AS backend-build
WORKDIR /app/backend
COPY backend/package.json backend/package-lock.json* ./
RUN npm install
COPY backend/ ./

# ---------- Production image ----------
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production

# Copy backend
COPY --from=backend-build /app/backend ./backend
# Copy frontend build
COPY --from=frontend-build /app/frontend/build ./frontend/build

WORKDIR /app/backend

# Expose port for Render.com (uses $PORT)
ENV PORT=10000
EXPOSE 10000

CMD ["node", "index.js"]
