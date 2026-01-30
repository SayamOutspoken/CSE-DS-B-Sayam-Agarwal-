import React,{useState} from 'react'

function Count1() {
    const [count,setCount]=useState(0)
    function increament()
    {
        setCount(count+1)
    }
    function decreament()
    {
        setCount(count-1)
    }
  return (
    <div>
        <button onClick={increament}>+</button>
        <span>{count}</span>
         <button onClick={decreament}>-</button>
        
    </div>
  )
}

export default Count1