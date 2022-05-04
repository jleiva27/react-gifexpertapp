import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {


    const [inputValue, setInputValue] = useState('')
  
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCategories(cats => [inputValue,...cats]);
        setInputValue('')
    }

  return (
    <div>
        <form className="form" onSubmit={handleSubmit}>
            <input 
                placeholder='Buscar Gif...'
                type="text" 
                value={inputValue} 
                onChange={handleInputChange}> 
            </input>
        </form>
     </div>
  )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
