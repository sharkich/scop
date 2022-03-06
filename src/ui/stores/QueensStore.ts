import { makeAutoObservable } from 'mobx';

import { Queen } from '@interfaces/Queen';

import { RootStore } from './RootStore';

export class QueensStore {
  private _queens: Queen[] = [];

  constructor(private rootStore: RootStore) {
    makeAutoObservable(this); // , { rootStore: false }
  }
}
