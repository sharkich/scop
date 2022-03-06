import { useRootStore } from './useRootStore';

export const useQueensStore = () => {
  const { queensStore } = useRootStore();

  return queensStore;
};
