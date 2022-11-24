import React from 'react';
import "./Style.scss";
// import TestComponent from './components/TestComponent';
import { AppProvider } from './context/AppContext';
import { ThemeProvider } from "@mui/material/styles";
// import { Button, CssBaseline } from "@mui/material";
import theme from './Theme'
import Dashboard from './components/Dashboard';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppProvider>
          <Dashboard />
        </AppProvider>
      </div>
    </ThemeProvider>
    
  );
}

export default App;
