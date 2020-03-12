import React from 'react';
import MiniDrawer from './Components/MiniDrawer';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import About from './Components/About';
//import Contact from './Components/Contact';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
//import cards from './Components/cards';
import Footer from './Components/Footer';
import Politics from './Components/Politics';
import berlin from './Components/berlin';
import profile from './Components/profile';


function App() {
  return (
    <Router>
  <div>
    <MiniDrawer/>
    <NavBar/>
    <Switch>
      <Route path="/home" exact component={Home}/>
      <Route path="/politics" component={Politics}/>
      <Route path="/berlin" component={berlin}/>
      <Route path="/profile" component={profile}/>
      
      
     
    </Switch>
    
    <Footer/>
  </div>
  </Router>
  );
}

export default App;
