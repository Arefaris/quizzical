import Blobs from "./blobs";
import React, {useEffect, useState} from "react";
import Hero from "./hero.js"
import Question from "./question";
import api from "./api";
import { nanoid } from "nanoid";

export default function Home() {
  

  const [displayQuestions, setdisplayQuestions] = useState(false)
  const [questions, setQuestions] = useState([{}])
  const [triviaObject, setTriviaObject] = useState([{}])
  const [newGame, setNewGame] = useState(false)
  const [startGame, setStartGame] = useState(false)

  function showQ(){
    setdisplayQuestions(true)
}

  function revQuestions(){
    setTriviaObject((prevTrivia)=>{
      return prevTrivia.map((question)=>{
        
        return {...question, checkAll: true}
      })
    })

    setNewGame(true)
    
  }

  function checkAnswer(event, bool){
    
    if(bool){
      
    }
  }

  useEffect(()=>{
    setQuestions((prevQuestions)=>{
      return triviaObject.map((question)=>{
       
        return <Question
            key={question.key}
            question={question.question}
            answers={question.answers}
            checkAnswer={checkAnswer}
            checkAll={question.checkAll}
        />
      })
    })
}, [triviaObject])
  

  useEffect(()=>{
    setTriviaObject((prevTrivia)=>{
      return api.results.map((question)=>{

        let answers = question.incorrect_answers.map((answer)=>{
          return {"answer": answer, "correct": false}
        })

        let correctAnswer = {"answer": question.correct_answer, "correct": true}
        answers.push(correctAnswer)
        shuffle(answers)


        return {
          "key":nanoid(),
          "question":question.question,
          "answers":answers,
          "checkAll":false
        }
      })
    })
    
    console.log("you a here")
  }, [startGame])

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
       {displayQuestions && <button onClick={(event)=> {newGame ? setNewGame(false) && setStartGame(true) : revQuestions()}} className="confirm-btn">{newGame ? "Play again": "Check answers"}</button>}
       
      </main>
    </>
  );
}
