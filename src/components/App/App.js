import React, { useEffect, useState } from 'react';
import './App.css';
import {getOrders} from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

const App = () => {
  const [orders, setOrders] = useState([])

  const updateOrders = () => {
    getOrders()
    .then(data => {
      console.log(data)
      setOrders(data.orders)
    })
    .catch(err => console.error('Error fetching:', err));
  }

  useEffect(() => {
    updateOrders()
  }, [])



  return (
    <main className="App">
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm updateOrders={updateOrders}/>
      </header>
      <Orders orders={orders}/>
    </main>
  );

}


export default App;
