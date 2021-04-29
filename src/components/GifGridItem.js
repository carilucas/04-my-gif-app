import React from 'react'

export const GifGridItem = ({url,title}) => {
   return (
      <div className="gif-grid-item animate__animated animate__fadeIn">
         <p>{title}</p>
         <img src={url} alt={title} />
      </div>
   )
}
