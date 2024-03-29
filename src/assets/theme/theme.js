import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark', // Enable dark mode
    // You can customize the colors, typography, etc. here
  },
  typography: {
    fontFamily: [
        'NicoMoji',
    ]
  }
  // Add any other theme customization
});

export default darkTheme;
