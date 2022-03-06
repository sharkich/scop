import { Nullable } from '@utils/fp';

import { OnlineStatus } from './OnlineStatus';

export interface Queen {
  host: string;
  created: Date;
  createdBy: string;
  status: Nullable<OnlineStatus>;
  lastOnline: Nullable<Date>;
}
