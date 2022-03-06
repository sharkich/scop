import { AppBarProps, styled } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';

import { DRAWER_WIDTH } from '../const';

interface Props extends AppBarProps {
  open?: boolean;
}

export const AppBarStyled = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open'
})<Props>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));
