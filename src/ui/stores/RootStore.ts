import { QueensStore } from './QueensStore';
import { UiState } from './UiState';
import { UserStore } from './UserStore';

export class RootStore {
  userStore = new UserStore();
  uiStore = new UiState();
  queensStore = new QueensStore(this);
}
