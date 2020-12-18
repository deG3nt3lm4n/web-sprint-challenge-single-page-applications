import React, {useState, useEffect} from "react";
import schema from './schema'

import { Route , Switch, useHistory } from 'react-router-dom'
import Form from "./components/Form";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import OrderConfirm from './components/OrderConfirm'

import * as yup from 'yup'
import axios from 'axios'
import './App.css'

const initialFormValues = {
  name: '',
  size: '',
  cheese: false,
  pepperoni: false,
  onions: false,
  peppers: false,
  specialInstructions: ''
}

const formErrors ={
  name: '',
  size: '',
  specialInstructions: ''
}

const orders = []
const initDisabled = true;

const App = () => {
  const history = useHistory()
  const [initalOrders, setInitialOrders] = useState(orders)
  const [formValues , setFormValues] = useState(initialFormValues)
  const [formEr, setFormEr] = useState(formErrors)
  const [disabled, setDisabled] = useState(initDisabled)

  const getOrder = () => {
    axios.get('https://reqres.in/api/orders')
      .then(res => setInitialOrders(res.data.data))
      .catch(err => console.log(err))
  }

  const postNewOrder = (newOrder) => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        setInitialOrders([res.data,...initalOrders])
        setFormValues(initialFormValues)
      })
      .catch(err => console.log(err))
  }

  const formChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormEr({
          ...formEr,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormEr({
          ...formEr,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      specialInstructions: formValues.specialInstructions.trim(),
      topping: ["cheese", "pepperoni", "onions","peppers"].filter(
        (top) => formValues[top]
      )
    }

    postNewOrder(newOrder)

    history.push('/orderConfirm')

  }


  useEffect(() => {
    getOrder()
  },[])

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);



  return (
    <>
      <Header/>


      <Switch>
        <Route exact path='/'>
          <HomePage/>
        </Route>
        <Route path='/pizza'>
          <Form values={formValues} change={formChange} submit={formSubmit} disabled={disabled} err={formEr}/>
        </Route>
        <Route path='/orderConfirm'>
          <OrderConfirm order={initalOrders} />
        </Route>
      </Switch>

    </>
  );
};
export default App;
