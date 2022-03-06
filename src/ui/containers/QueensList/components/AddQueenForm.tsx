import { FC } from 'react';

import { Box, Button, TextField } from '@mui/material';

interface Props {}

export const AddQueenForm: FC<Props> = () => {
  return (
    <form>
      <Box sx={{ display: 'flex' }}>
        <TextField label="Add Queen Host" variant="outlined" sx={{ minWidth: 300 }} />
        <Button variant="contained" sx={{ marginLeft: 1 }}>
          Add
        </Button>
      </Box>
    </form>
  );
};
