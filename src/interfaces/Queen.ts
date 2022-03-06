import { Nullable } from '@utils/fp';

import { OnlineStatus } from './OnlineStatus';

export interface Queen {
  id: string;
  host: string;
  created: Date;
  createdBy: string;
  status: Nullable<OnlineStatus>;
  lastOnline: Nullable<Date>;
}

export interface RawQueen {
  host: string;
  created: string;
  createdBy: string;
  status: Nullable<OnlineStatus>;
  lastOnline: Nullable<string>;
}
