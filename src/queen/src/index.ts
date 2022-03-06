import express from 'express';

import { QueensStore } from './queens.store';

const app = express();

const PORT = process.env.PORT || 3021;

const queensStore = new QueensStore();

app.get('/', (req, res) => {
  res.send('SocialCheesingOfPeace#Queen');
});

app.get('/ping', (req, res) => {
  res.json({
    pong: true,
    date: new Date()
  });
});

app.get('/queens', (req, res) => {
  res.json({
    queens: queensStore.queens,
    date: new Date()
  });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening on port http://localhost:${PORT}`);
});
