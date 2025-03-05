
 import React, { Component } from 'react'
import TicketForm from './components/TicketForm';
import './App.css';
import Auth from './components/Auth';
import ContextApi from './context/ContextApi';
 
  class App extends Component {
   render() {
     return (
       <>
       <ContextApi>

        <TicketForm/>
        <Auth/>
       </ContextApi>
       </>
     )
   }
 }
 

export default App;
