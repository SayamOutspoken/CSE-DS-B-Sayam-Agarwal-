import React, { useState,useEffect } from 'react'
import Fashion from './component/Fashion'

function App() {
  const [books,setBooks]=useState([])
  useEffect(()=>{
fetch('https://fakestoreapi.com/products')
.then(res =>res.json())
.then(data =>{
  setBooks(data);
})
  },[])
  return (
    <div>
      {
      books.map((b,i)=>(
        <Fashion key={i} image={b.image} title={b.title} price={b.price}/>
      ))
      }
    </div>
  )
}

export default App