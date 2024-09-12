import Blobs from "./blobs";
import React, {useEffect, useState} from "react";
import Hero from "./hero.js"
import Question from "./question";
import api from "./api";
import { nanoid } from "nanoid";
export default function Home() {


  const [displayQuestions, setdisplayQuestions] = useState(false)
  const [questions, setQuestions] = useState([{}])


  function showQ(){
    setdisplayQuestions(true)
    
  }

  function checkAnswer(event, bool){
    
    if(bool){
      console.log("rigth answer")
    }
  }
  
  useEffect(()=>{
      setQuestions((prevQuestions)=>{
        return api.results.map((question)=>{

          return <Question
              key={nanoid()}
              question={question.question}
              correctAnswer={question.correct_answer}
              incorrectAnswers={question.incorrect_answers}
              checkAnswer={checkAnswer}
            
          />
        })
      })
  }, [displayQuestions])
  
  return (
    <>
      <Blobs 
        showQ={displayQuestions}
      />
      <main>
      {!displayQuestions && <Hero 
          showQ={showQ}
        />}

      {displayQuestions && questions}
       {displayQuestions && <button className="confirm-btn">Check answers</button>}
       
      </main>
    </>
  );
}
