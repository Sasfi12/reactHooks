import { useEffect } from "react";
// useEffect(function, [dependencies])

// 1. useEffect(() => {}) // Runs after every re-render
// 2. useEffect(() => {} , []) // Runs only on mount. 
// 3. useEffect(() => {} , [value]) // Runs on mount + when value changes  


function LearnUseEffect() {
    let condition = false; 
    let value = null;
    return (
        <div className='hels'>
            <h1>Learning about useEffect... in React. </h1>
            <button>Click to change preferences</button>
            <h2>I like {value}</h2>
        </div>
      )
}
export default LearnUseEffect