import { useEffect, useState } from "react"

export default function Trivia(
  {data , questionNumber , setQuestionNumber , stop ,setStop , score , setScore}) {
  const [question , setQuestion]= useState(null);
  const [selectedAnswer , setSelectedAnswer] = useState(null)
  const [className , setClassName] = useState("answers")


  useEffect(() => {
    setQuestion(data[questionNumber-1])
  },[data , questionNumber]);

  if(question?.id > 5){
    setStop(true)
  }
const handleclick = (a) => {
      setSelectedAnswer(a);
      if(a.correct){
        setClassName("answer right")
        setScore(score + 10);

        console.log(score)
        setQuestionNumber((prev) => prev + 1)
      }
      else{
        setClassName("answer wrong")
        setScore(score)
        setQuestionNumber((prev) => prev + 1)
      }
    }
    
  return (
    <div className="trivia">
        <div className="questions">{question?.question}</div>
        <div className="options">
             {question?.answers.map((answers) =>{
              return(
               <div className={selectedAnswer === answers ? className :"answer"} onClick={() => handleclick(answers)}>{answers.text}</div>  ) 
             })} 
              
        </div>
    </div>
    
   
  )
}


