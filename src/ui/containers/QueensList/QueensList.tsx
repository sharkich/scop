import { FC } from 'react';

import { Box, Button, Container, List, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { AddQueenForm } from './components/AddQueenForm';
import { QueenItem } from './components/QueenItem';
import { useQueensListViewModel } from './useQueensList.vm';

export const QueensList: FC = observer(() => {
  const { queens, loadQueens } = useQueensListViewModel();
  // eslint-disable-next-line no-console
  console.log('queens', queens[0]?.id);

  return (
    <Container>
      <Typography variant="h1">Queens</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <AddQueenForm />
        <Button onClick={loadQueens} variant="contained" sx={{ marginLeft: 2 }}>
          Load
        </Button>
      </Box>
      <List>
        {queens.map(queen => (
          <QueenItem key={queen.id} queen={queen} />
        ))}
      </List>
    </Container>
  );
});
