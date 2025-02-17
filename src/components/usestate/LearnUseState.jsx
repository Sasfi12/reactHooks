import { useState } from 'react' // this is what I'm trying to understand. 
import "./LearnUseState.css"
function LearnUseState() {
const choices = ["Ramen" , "Tempura" , "Sushi" , "Byriani" , "Rasgullah" , "Kulfi" , "何とかの食べ物"]
  let currentChoice = choices[Math.floor(Math.random()  * choices.length)]
  const [currentState , stateName] = useState(currentChoice) // this 
  function newState() { 
    currentChoice = choices[Math.floor(Math.random()  * choices.length)]
    stateName(currentChoice)
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