import { useState } from 'react';
import './App.css';
import Trivia from './Trivia';
import Player from './Player';

function App() {
  const [questionNumber , setQuestionNumber] = useState(1);
  const [stop , setStop] = useState(false)
  const [score , setScore] = useState(0)
  const [player , setPlayer] = useState(null)
  const data =[
    {
      id:1,
      question:"Which Of The Following Was Discovered First?",
      answers: [
          {
            text: "Light",
            correct: false,
          },
          {
            text: "Water",
            correct: true,
          },
          {
            text: "Food",
            correct: false,
          },
          {
            text: "Shelter",
            correct: false,
          },
      ],
    },
    {
      id:2,
      question:"First Player To Score 200 in ODI?",
      answers: [
          {
            text: "Sachin",
            correct: false,
          },
          {
            text: "Don Bradman",
            correct: false,
          },
          {
            text: "Rohit Sharma",
            correct: true,
          },
          {
            text: "Rahul Dravin",
            correct: false,
          },
      ],
    },
    {
      id:3,
      question:"Which Of This Compay Is Owned By TATA?",
      answers: [
          {
            text: "Rolex",
            correct: false,
          },
          {
            text: "Infosys",
            correct: false,
          },
          {
            text: "Finolex",
            correct: false,
          },
          {
            text: "Jaguar",
            correct: true,
          },
      ],
    },
    {
      id:4,
      question:"What Was The Name Of Main Character In YJHD?",
      answers: [
          {
            text: "Bunny",
            correct: true,
          },
          {
            text: "Rahul",
            correct: false,
          },
          {
            text: "Ram",
            correct: false,
          },
          {
            text: "Ali",
            correct: false,
          },
      ],
    },
    {
      id:5,
      question:"Who Is The Developer Of This WebApp?",
      answers: [
          {
            text: "Aditya",
            correct: false,
          },
          {
            text: "Ritu",
            correct: false,
          },
          {
            text: "Abhishek",
            correct: true,
          },
          {
            text: "Aish",
            correct: false,
          },
      ],
    },
    {id:6}
  ] 
  
  return (
    <>
    <div className="main">
      <h1>THE QUIZ GAME</h1>
        
        {player ? (
          <>
          <h1>Your Score Is : {score}</h1>
          {stop ?(
            
        <h1>Your final score is {score}/50</h1>
        
      ):(
       <Trivia data={data} 
       stop={stop}
       score={score}
       setScore={setScore}
       setStop={setStop}
       questionNumber={questionNumber}
       setQuestionNumber={setQuestionNumber }/> )}
          </>

        ):<Player setPlayer={setPlayer}/>}
    </div>
    </>
  );
}

export default App;

