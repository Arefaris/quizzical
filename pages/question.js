import he from "he"
import { nanoid } from "nanoid";
import { useState } from "react";

export default function Question(props){
    console.log(props.checkAll)
   
    let answers = []
 
    const [isSelected, setIsSelected] = useState(null);

    function handleClick(event, index, answer){
        setIsSelected(index)
        props.checkAnswer(event, answer)
        

    }

    for (let i=0; i < props.answers.length; i++){
        let inc = props.answers[i]
        answers.push(<button key={nanoid()} 
                            onClick={(event)=>{handleClick(event, i, inc.correct)}} 
                            className={isSelected === i ? "selected answer" : "answer"}>
                    {he.decode(inc.answer)}</button>)
    }
      
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


