import { Queen, RawQueen } from '@interfaces/Queen';

export const queenMap = (raw: RawQueen): Queen => ({
  ...raw,
  created: new Date(raw.created),
  lastOnline: raw.lastOnline ? new Date(raw.lastOnline) : null
});
