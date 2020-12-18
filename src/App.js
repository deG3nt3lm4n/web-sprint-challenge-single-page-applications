import React, {useState} from "react";

import { Route , Switch } from 'react-router-dom'
import Form from "./components/Form";
import Header from "./components/Header";
import HomePage from "./components/HomePage";

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
  const [initalOrders, setInitialOrders] = useState(orders)
  const [formValues , setFormValues] = useState(initialFormValues)
  const [formEr, setFormEr] = useState(formErrors)
  const [disabled, setDisabled] = useState(initDisabled)

  const formChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  const formSubmit = () => {

  }







  return (
    <>
      <Header/>



      <Switch>
        <Route exact path='/'>
          <HomePage/>
        </Route>
        <Route path='/pizza'>
          <Form values={formValues} change={formChange}/>
        </Route>
      </Switch>

    </>
  );
};
export default App;
