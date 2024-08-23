import React from 'react'
import SearchPhoto from '../assets/030-search.svg'
export default function Supervisor(props) {
  return (
   
         <div className='supervisor' >
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div className='image'>
        <img src={props.img} alt="" />
      </div>
     
    </div>
   
   
  )
}
