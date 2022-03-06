import { FC, ReactNode, useState } from 'react';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, Divider, IconButton, useTheme } from '@mui/material';

import { AppBar } from './components/AppBar';
import { AppDrawerStyled } from './components/AppDrawerStyled';
import { AppNav } from './components/AppNav';
import { DrawerHeader } from './components/DrawerHeader';

interface Props {
  children: ReactNode;
}

export const BaseLayout: FC<Props> = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar open={open} onOpen={handleDrawerOpen} />
      <AppDrawerStyled variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <AppNav />
      </AppDrawerStyled>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};
