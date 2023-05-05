import React from 'react'
import '../styles/Status.css'

const Status = (props) => {

    console.log(props)
    let correcAnswers = 0
    props.results.map((quiz)=>{
        if(quiz.responseStatus===true){
            return correcAnswers++
        }
    })
    

  return (
    <div className='status__conteiner'>
        {correcAnswers} correct answer from {props.number}
    </div>
  )
}

export default Status