import React from 'react'
import './book.css'
function Book(Props) {
    const [count,setCount]=useState(0)
        function increament()
        {
            setCount(count+1)
        }
        // function decreament()
        // {
        //     setCount(count-1)
        // }
  return (
    <div id='book'> 
        <img src="https://imgs.search.brave.com/Kw55FAwYgZWAX7NmVs0GI_aUHgV6j4adCMYZH62QoSk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zLW1h/Z2F6aW5lLnBob3Rv/Z3JhcGh5L2NlZW1l/cy93ZWJmaWxlL2lt/Zy8xMDU4MzcvbGVp/Y2Etcy1tYWdhemlu/ZS1jb3Zlci0zLmpw/Zz94PTgwMA" alt="" height={100} width={100} />
        <h3>{Props.Title}</h3>
        <h3>{Props.Price}</h3>
        <button onClick={increament}> Add to Cart</button>
        <span>{count}</span>
    </div>
  )
}

export default Book