import React from "react";
import { Route , Switch } from 'react-router-dom'
import Form from "./components/Form";
import Header from "./components/Header";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <>
      <Header/>



      <Switch>
        <Route exact path='/'>
          <HomePage/>
        </Route>
        <Route path='/pizza'>
          <Form/>
        </Route>
      </Switch>

    </>
  );
};
export default App;
