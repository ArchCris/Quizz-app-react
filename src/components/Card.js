import React, { useState } from 'react'
import '../styles/Card.css'


const Card = (props) => {

    const[selected,setSelected]=useState(null)
    

  return (
    <div className={props.disable===true ? 'card__conteiner disabled' : 'card__conteiner'}>
        <div className='card__question'>{props.data.question}</div>
        <div className='card__answers'>
        {props.data.responses?.map((response,key)=>{
            return(
                <button className='card__answer' onClick={()=>{setSelected(response)}} key={key}>{response}</button>
            )
        })}
        </div>
        <div className='card__display'>
          <p>{props.number + 1}</p>
          <button className='card__button' onClick={()=>{props.function(selected)}}>Submit</button>
        </div>
    </div>
  )
}

export default Card