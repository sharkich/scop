import { createTheme } from '@mui/material';
import { lime, teal } from '@mui/material/colors';

export const DARK_THEME = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: teal.A200
    },
    secondary: {
      main: lime.A200
    },
    // divider: teal[900],
    background: {
      default: teal[900],
      paper: teal[800]
    },
    text: {
      primary: '#fff',
      secondary: lime[300]
    }
  }
});
