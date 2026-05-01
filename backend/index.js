

import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3001;
const buildPath = path.join(__dirname, '../frontend/build');

app.use(cors());

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});


// Serve static files from build for production
app.use(express.static(buildPath));

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: buildPath });
});

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
