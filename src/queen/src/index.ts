import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import { QueensStore } from './queens.store';

const PORT = process.env.PORT || 3021;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

const queensStore = new QueensStore();

app.get('/', async (req, res) => {
  res.send('SocialCheesingOfPeace#Queen');
});

app.get('/ping', async (req, res) => {
  res.json({
    pong: true,
    date: new Date()
  });
});

app.get('/queens', async (req, res) => {
  res.json({
    queens: queensStore.queens,
    date: new Date()
  });
});

app.post('/queens/add', async (req, res) => {
  const { host, hash, me } = req.body;
  if (!QueensStore.isValidHost(host, me, hash)) {
    res.status(400).send({ error: 'Security issue' });

    return;
  }
  const queen = queensStore.add(host, me);
  res.json({
    queen,
    date: new Date()
  });
});

app.listen(PORT, async () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening on port http://localhost:${PORT}`);
});
