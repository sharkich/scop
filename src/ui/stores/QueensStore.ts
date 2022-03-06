import { makeAutoObservable } from 'mobx';

import { Queen } from '@interfaces/Queen';

import { RootStore } from './RootStore';

export class QueensStore {
  queens: Queen[] = [];

  constructor(private rootStore: RootStore) {
    makeAutoObservable(this); // , { rootStore: false }
  }

  setList(queens: Queen[]) {
    this.queens = queens;
  }
}
