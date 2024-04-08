import React from 'react';
import ThemeContext from './ThemeContext';

function ThemeProvider({ children }) {
  const theme = {
    foreground: 'white',
    background: 'black',
    fontSize: '100px',
    Balablue: 'green',
    fct:'center',
    primary:'blue'
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
