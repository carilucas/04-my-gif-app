import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const SearchComponent = ( {setCategories} ) => {
   const [value, setValue] = useState('');


   const handleInputChange = ({target})=>{
      setValue( target.value )
   }

   const handleSubmit = (e)=>{
      e.preventDefault();
      if (value === '') {
         return;
      }
      setCategories (
         cat => [value,...cat]
      )
      setValue('');
   }
   return (
      <div>
         <form onSubmit={ handleSubmit }>
            <input 
               type="text"
               value={ value }
               onChange={ handleInputChange }
            />
         </form>
      </div>
   )
}

SearchComponent.propTypes={
   setCategories: PropTypes.func.isRequired,
}