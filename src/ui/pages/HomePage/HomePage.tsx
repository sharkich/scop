import { FC } from 'react';

import { BaseLayout } from '../../components/BaseLayout';
import { QueensList } from '../../containers/QueensList/QueensList';

export const HomePage: FC = () => {
  return (
    <BaseLayout>
      <QueensList />
    </BaseLayout>
  );
};
