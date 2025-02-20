import { useState } from 'react' // this is what I'm trying to understand. 
import "./LearnUseState.css"
function LearnUseState() {
const choices = ["Ramen" , "Tempura" , "Sushi" , "Byriani" , "Rasgullah" , "Kulfi" , "何とかの食べ物"]

  const [currentState , setCurrentState] = useState(choices[0]) // this 
  
  function newState() {
    let currentChoice = choices[choices.indexOf(currentState) + 1 ]
    if(currentChoice == undefined) {
      currentChoice = choices[0]
    }
    setCurrentState(currentChoice)
  }
  return (
    <div className='hels'>
        <h1>Learning about useStates... in React. </h1>
        <button onClick={() => newState()}>Click to change preferences</button>
        <h2>I like {currentState}</h2>
    </div>
  )
}

export default LearnUseState 