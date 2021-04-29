import React, { useState } from 'react'
import { GifGrid } from './components/GifGrid'
import { SearchComponent } from './components/SearchComponent'

export const GiffApp = () => {
   const [categories, setCategories] = useState(['Goku','Naruto'])
   return (
      <div>
         <h1>GiffApp</h1>
         <hr/>
         <SearchComponent setCategories={setCategories}/>
         <div>
            {
               categories.map( (category,i) => (
                  <GifGrid key={category + i} category={category}/>
               ))
            }
         </div>
      </div>
   )
}
