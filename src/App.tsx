import React from 'react';
import TestComponent from './components/TestComponent';
import { AppProvider } from './context/AppContext';
import { ThemeProvider } from "@mui/material/styles";
import { Button, CssBaseline } from "@mui/material";


import theme from './Theme'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppProvider>
          <TestComponent />
        </AppProvider>
      </div>
    </ThemeProvider>
    
  );
}

export default App;
