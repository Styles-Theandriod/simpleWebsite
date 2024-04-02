
import { useContext } from 'react';
import ThemeContext from './ThemedButton';

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button style={{ background: theme.background, color: theme.foreground }}>I am styled by theme context!</button>;
}

export default ThemedButton;