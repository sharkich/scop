import { makeAutoObservable, observable } from 'mobx';

import { getWindowDimensions, WindowDimensions } from '../services/ui/getWindowDimensions';

export class UiState {
  language = 'en_US';
  pendingRequestCount = 0;

  // .struct makes sure observer won't be signaled unless the
  // dimensions object changed in a deepEqual manner.
  windowDimensions: WindowDimensions = getWindowDimensions();

  constructor() {
    makeAutoObservable(this, { windowDimensions: observable.struct });
    window.onresize = () => {
      this.windowDimensions = getWindowDimensions();
    };
  }

  get appIsInSync() {
    return this.pendingRequestCount === 0;
  }
}
