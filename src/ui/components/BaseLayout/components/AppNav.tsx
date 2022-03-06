import { FC } from 'react';

import HomeIcon from '@mui/icons-material/Home';
import { Badge, Box, Chip, Divider, List } from '@mui/material';

import { APP_VERSION } from '../../../APP_CONFIG';
import { ListItemLink } from '../../ListItemLink';

export const AppNav: FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <List>
        <ListItemLink icon={<HomeIcon />} text="Home" to="/" />
      </List>
      <Divider />
      <Box sx={{ flex: 1 }} />
      <Box sx={{ textAlign: 'center', margin: 1 }}>
        <Badge badgeContent="beta" color="secondary">
          <Chip label={`v${APP_VERSION}`} size="small" />
        </Badge>
      </Box>
    </Box>
  );
};
