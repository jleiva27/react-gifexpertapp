import React from 'react'
import '../styles/index.css';

export const GifGridItem = ({id, url, title}) => {
  return (
    <div key={id} className='card animate__animated animate__fadeIn'>
        <img src={url} alt={title}></img>
   
    </div>
  )
}
