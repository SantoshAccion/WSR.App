import React from 'react';
import TestComponent from './components/TestComponent';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <AppProvider>
        <TestComponent />
      </AppProvider>
    </div>
  );
}

export default App;
