import React, { useState } from 'react';
import {addOrder} from '../../apiCalls'
import './OrderForm.css'

const OrderForm = ({updateOrders}) => {
  const [name, setName] = useState('')
  const [ingredients, setIngredients] = useState([])
  const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if(ingredients.length > 0) {
    const newOrder = {
      id: Date.now(),
      name: name,
      ingredients: ingredients
    }
    addOrder(newOrder)
    .then(data => {
      updateOrders()
      clearInputs()
    }
    )
    .catch(error => console.log(error))
  }
  }

  const updateName = (event) => {
    setName(event.target.value)
  }

  const clearInputs = () => {
    setName('')
    setIngredients([])
  }

  const updateIngredients = (event) => {
    event.preventDefault()
    console.log(ingredients)
    console.log(event.target.value)
    setIngredients([...ingredients, event.target.value])
  }

  const displayOptions = possibleIngredients.map(ingredient => {
    return (
      <button className='opt-button' key={ingredient} value={ingredient} onClick={e => updateIngredients(e)}>
      {ingredient}
      </button>
    )
})

  const displayOrder = () => {
    return (<p>Order: { ingredients.join(', ')}</p>)
   }

return (
  <>
    <form>
      <input
        type='text'
        placeholder='Name'
        onChange={event => {updateName(event)}}
      ></input>
        <div className='options-container'>
          {displayOptions}
        </div>
        {ingredients && displayOrder()}
        {!ingredients && <p>Order: Nothing selected</p>}
      <button onClick={e => handleSubmit(e)}>
        Submit Order
      </button>
    </form>
  </>
)

}



export default OrderForm;
