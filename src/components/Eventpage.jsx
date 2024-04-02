import React, { useState, useEffect } from 'react';

function Eventpage() {
  const [count, setCount] = useState(0)
  
  useEffect(() =>{
    document.title = `you clicked ${count} times`
  })
  
  const handleClick = () => {
    setCount(count + 1 )
  }
  return (
    <React.Fragment>
    <p>{count}</p>
    <button onClick={handleClick}>Click me</button>
    </React.Fragment>
  )
}

export default Eventpage