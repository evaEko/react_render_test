import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});


// Serve static files from build for production
app.use(express.static('../frontend/build'));

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: '../frontend/build' });
});

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
