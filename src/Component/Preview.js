import React, {useState} from 'react'
import ClassComponent from './ClassComponent'
import FunctionalComponent from './FunctionalComponent'
import "./Style.css"

const Preview = () => {

    const [card1, setcard1] = useState(false)  
    const [card2, setcard2] = useState(false)  
    
    return (
    <>
    <div>
        <h1 className='heading'>Styling Using Functional and Class Component</h1>
        <button className='button1' onClick={()=>card1?setcard1(false):setcard1(true)}>
            To see styling in functional component
        </button>
        <button className='button2' onClick={()=>card2?setcard2(false):setcard2(true)}>
              To see styling in class component
        </button>
    </div>

    {card1&&<FunctionalComponent/>}
    {card2&&<ClassComponent/>}
    </>
  )
}

export default Preview