import React from 'react';
import './Orders.css';

const Orders = ({orders})=> {
  const orderEls = orders.map(order => {
    return (
      <div key={order.id} className="order">
        <h3 className='order-name'>{order.name}</h3>
        <ul className="ingredient-list">
          {order.ingredients.map(ingredient => {
            return <li key={ingredient}>{ingredient}</li>
          })}
        </ul>
      </div>
    )
  });

  return (
    <section>
      { orderEls.length ? orderEls : <p>No orders yet!</p> }
    </section>
  )
}

export default Orders;
