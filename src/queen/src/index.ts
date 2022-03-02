import express from 'express';

const app = express();

const PORT = process.env.PORT || 3021;

app.get('/', (req, res) => {
  res.send('Social Cheesing Of Peace');
});

app.get('/ping', (req, res) => {
  res.json({
    pong: new Date()
  });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening on port http://localhost:${PORT}`);
});
