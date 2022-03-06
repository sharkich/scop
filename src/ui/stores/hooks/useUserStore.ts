import { useRootStore } from './useRootStore';

export const useUserStore = () => {
  const { userStore } = useRootStore();

  return userStore;
};
