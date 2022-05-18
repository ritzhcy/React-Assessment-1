import React from 'react'
import "./Style.css"

const FunctionalComponent = () => {
  return (
    <div className='container1'>
        <h1>This is created using functional Component</h1>
        <p>This is done using external CSS</p>
        <p style={{color:'blue'}}>This is done using Inline CSS</p>
    </div>
  )
}

export default FunctionalComponent