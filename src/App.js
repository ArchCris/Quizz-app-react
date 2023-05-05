import './styles/App.css';
import Card from './components/Card';
import Status from './components/Status';
//Quizes//
import { quizes } from './data/data';
//Functionalities//
import { useState } from 'react';

function App() {

  const[sesionQuizes,setSesionQuizes]=useState(quizes)
  const[quizNumber,setQuizNumber]=useState(0)

  const handleResponse = (data) =>{
    setSesionQuizes([...sesionQuizes],sesionQuizes[quizNumber].questionStatus=true)
    if(sesionQuizes[quizNumber].correctResponse===data){
      setSesionQuizes([...sesionQuizes],sesionQuizes[quizNumber].responseStatus=true,sesionQuizes[quizNumber].questionStatus=true)
    }
    setQuizNumber(quizNumber+1)
  }



  return (
    <div className="conteiner__app">
      {quizNumber <= sesionQuizes.length-1 ?
      <Card data={sesionQuizes[quizNumber]} function={handleResponse} disable={false} number={quizNumber}/>
      :
      <Status results={sesionQuizes} number={quizNumber}/>}
    </div>
  );
}

export default App;
