import { OnlineStatus } from './OnlineStatus';

export interface Queen {
  ip: string;
  status: OnlineStatus;
  lastOnline: Date;
}
