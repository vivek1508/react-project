import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import About from './About';
import Contect from './Contect';
import Servic from './Servic';
import Home from './Home';
import Navbar from './Navbar';






const App =()=> {
  return (
    <>
    <Navbar/>
  <Switch>
  
    <Route exact path='/' component={Home}/>
    <Route exact path='/About' component={About}/>
    <Route exact path='/Contect' component={Contect}/>
    <Route exact path='/Servic' component={Servic}/>
    <Redirect to='/'/>
   
  </Switch>
   
    </>
  );
}

export default App;
