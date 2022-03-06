import { createContext, ReactNode } from 'react';

import { Nullable } from '@utils/fp';

import { RootStore } from '../RootStore';

// holds a reference to the store (singleton)
let store: RootStore;

export const RootStoreContext = createContext<Nullable<RootStore>>(null);

export const RootStoreProvider = ({ children }: { children: ReactNode }) => {
  //only create the store once ( store is a singleton)
  const root = store ?? new RootStore();

  return <RootStoreContext.Provider value={root}>{children}</RootStoreContext.Provider>;
};
