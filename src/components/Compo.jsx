import { useContext } from 'react';
import ThemeContext from './ThemeContext'

function Compo() {
  const theme = useContext(ThemeContext);
  return (
    <div>
        <h1 style={{color:theme.Balablue, textAlign:theme.fct, fontSize:theme.fontSize}}>Hello world</h1>
    </div>
  )
}

export default Compo;