import he from "he"
import { nanoid } from "nanoid";
import { useState } from "react";

export default function Question(props){
    
    let normalStyles

    let answers = []
 
    const [isSelected, setIsSelected] = useState(null);
    
    function handleClick(event, index, answer){
        setIsSelected(index)
        props.checkAnswer(event, answer)
        }

    for (let i=0; i < props.answers.length; i++){

        let inc = props.answers[i]

        let selectedStyle = {
            backgroundColor: "#D6DBF5"
        }
        
        if (props.checkAll){
            normalStyles = {
                borderColor: "#dad7cd",
                color: "#dad7cd"
            }

        }
    

        if (props.checkAll && inc.correct){
            selectedStyle = {
                backgroundColor: "#94D7A2"
            }

            normalStyles= {
                backgroundColor: "#94D7A2"
            }

            
        }else if (props.checkAll && isSelected === i) {
            selectedStyle = {
                backgroundColor: "#F8BCBC"
            }
        }

        answers.push(<button key={nanoid()} 
                            onClick={(event)=>{!props.checkAll && handleClick(event, i, inc.correct)}} 
                            className={"answer"}
                            style={isSelected === i ? selectedStyle: normalStyles}>
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


