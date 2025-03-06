
 import React, { Component } from 'react'
import TicketForm from './components/TicketForm';
import './App.css';
import ContextProvider from './context/ContextProvider';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
 
  class App extends Component {
   render() {
     return (
       <>
       <ContextProvider>
        <Navbar/>
        <TicketForm/>
        <Login/>
        <Signup/>
       </ContextProvider>
       </>
     )
   }
 }
 

export default App;
