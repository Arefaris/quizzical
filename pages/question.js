import he from "he"
import { nanoid } from "nanoid";
export default function Question(props){
    let answers = []
 
    
    
    for (let inc of props.incorrectAnswers){
        answers.push(<button key={nanoid()} onClick={(event)=>{props.checkAnswer(event,false)}} className="answer">{he.decode(inc)}</button>)
    }
    
    answers.push(<button key={nanoid()} onClick={(event)=>{props.checkAnswer(event, true)}} className="correct-answer">{he.decode(props.correctAnswer)}</button>)
    

    return <>
        <div className="table">
          <h1 className="question">{he.decode(props.question)}</h1>
          <div className="answers">
                {answers}
           </div>
           <hr className="solid"></hr>
       </div>
    </>
}

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