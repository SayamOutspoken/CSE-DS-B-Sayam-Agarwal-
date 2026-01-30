import React from 'react'
import './Card.css'
function Card(props) {
  return (
    <div id='card'>
        <img src="https://imgs.search.brave.com/E_aqleTKqBJ22_XElA-ENwa6CTmFYNdcCjenWog7qqg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9saXZl/LnN0YXRpY2ZsaWNr/ci5jb20vMjg0MC8x/MzQ2Mzg5MzYxM19j/Y2MwMzNjNTk4Lmpw/Zw" alt="" height={100} width={100} />
        <h1>{props.name}</h1>
        <h1>{props.edu}</h1>
    </div>
  )
}

export default Card