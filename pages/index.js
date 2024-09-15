import Blobs from "./blobs";
import React, {useEffect, useState} from "react";
import Hero from "./hero.js"
import Question from "./question";
import api from "./api";
import { nanoid } from "nanoid";
export default function Home() {
  

  const [displayQuestions, setdisplayQuestions] = useState(false)
  const [questions, setQuestions] = useState([{}])
  const [userChoises, setUserChoises] = useState([])

  function showQ(){
    setdisplayQuestions(true)
    
  }

  function checkAnswer(event, bool){
    //each choise should be saved
    //is choise true or false, if true, paint green, if false pait read
    if(bool){
      
    }
  }
  
  useEffect(()=>{

    /// req to api getting object mapping over it


      setQuestions((prevQuestions)=>{
        return api.results.map((question)=>{
          let answers = question.incorrect_answers.map((answer)=>{
            return {"answer": answer, "correct": false}
          })

          let correctAnswer = {"answer": question.correct_answer, "correct": true}
          answers.push(correctAnswer)
          shuffle(answers)

          return <Question
              key={nanoid()}
              question={question.question}
              answers={answers}
              checkAnswer={checkAnswer}
            
          />
        })
      })
  }, [displayQuestions])


  function shuffle(array) {

    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    
  }
  
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
