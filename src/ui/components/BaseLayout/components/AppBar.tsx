import { FC } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box, Breadcrumbs, Button, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { useUserStore } from '../../../stores/hooks/useUserStore';
import { AppBarStyled } from './AppBarStyled';

interface Props {
  open: boolean;
  onOpen: () => void;
}

export const AppBar: FC<Props> = observer(({ open, onOpen }) => {
  const userStore = useUserStore();
  const handleDrawerOpen = () => onOpen();

  const handleConnectWallet = () => userStore.connectWallet();

  return (
    <AppBarStyled position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: '36px',
            ...(open && { display: 'none' })
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ flex: 1 }}>
          <Breadcrumbs maxItems={3} aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
            {null && (
              <>
                <Link underline="hover" color="inherit" href="#">
                  Tx10 Agr
                </Link>
                <Link underline="hover" color="inherit" href="#">
                  Swap
                </Link>
              </>
            )}
            <Typography color="text.primary">Social Cheesing Of Peace</Typography>
          </Breadcrumbs>
        </Box>
        <div>({JSON.stringify(userStore.user)})</div>

        <Button variant="contained" color="secondary" onClick={handleConnectWallet}>
          Connect Wallet
        </Button>
      </Toolbar>
    </AppBarStyled>
  );
});
