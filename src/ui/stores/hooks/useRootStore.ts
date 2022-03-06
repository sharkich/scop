import { useContext } from 'react';

import { isNull } from 'lodash';

import { RootStoreContext } from '../providers/RootStoreProvider';

export const useRootStore = () => {
  const context = useContext(RootStoreContext);
  if (isNull(context)) {
    throw new Error('useRootStore must be used within RootStoreProvider');
  }

  return context;
};
