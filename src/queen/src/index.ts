import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import { APP_QUEEN_PORT, LCINFO } from '../../APP_CONST';
import { QueensStore } from './queens.store';

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

app.listen(APP_QUEEN_PORT, async () => {
  // eslint-disable-next-line no-console
  console.log(LCINFO, `SCOP listening on port http://localhost:${APP_QUEEN_PORT}`);
});
