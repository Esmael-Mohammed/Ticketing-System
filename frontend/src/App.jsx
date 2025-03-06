
 import React, { Component } from 'react'
import TicketForm from './components/TicketForm';
import './App.css';
import ContextProvider from './context/ContextProvider';
import Navbar from './components/Navbar';
 
  class App extends Component {
   render() {
     return (
       <>
       <ContextProvider>
        <Navbar/>
        <TicketForm/>
       </ContextProvider>
       </>
     )
   }
 }
 

export default App;
