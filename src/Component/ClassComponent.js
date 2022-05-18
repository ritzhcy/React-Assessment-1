import React, { Component } from 'react'
import "./Style.css"

export default class ClassComponent extends Component {
  render() {
    return (
        <div className='container2'>
            <h1>This is created using class Component</h1>
            <p>This is done using external CSS</p>
            <p style={{color:'blue'}}>This is done using Inline CSS</p>
        </div>
    )
  }
}

