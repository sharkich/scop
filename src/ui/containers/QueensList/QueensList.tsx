import { FC } from 'react';

import { Button, Container, List, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { QueenItem } from './components/QueenItem';
import { useQueensListViewModel } from './useQueensList.vm';

export const QueensList: FC = observer(() => {
  const { queens, loadQueens } = useQueensListViewModel();

  return (
    <Container>
      <Typography variant="h1">Queens</Typography>
      <Button onClick={loadQueens}>Load</Button>
      <List>
        {queens.map(queen => (
          <QueenItem key={queen.id} queen={queen} />
        ))}
      </List>
    </Container>
  );
});
