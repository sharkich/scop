import { makeAutoObservable } from 'mobx';

import { Nullable } from '@utils/fp';
import { uuid } from '@utils/uuid';

export interface User {
  uid: string;
}

export class UserStore {
  user: Nullable<User> = null;

  constructor() {
    makeAutoObservable(this);
  }

  connectWallet() {
    this.user = {
      uid: uuid()
    };
  }
}
