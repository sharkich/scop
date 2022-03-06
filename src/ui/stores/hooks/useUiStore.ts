import { useRootStore } from './useRootStore';

export const useUiStore = () => {
  const { uiStore } = useRootStore();

  return uiStore;
};
