import React, { Component } from 'react'
import { TicketContext } from '../context/ContextProvider';
import { Navigate } from 'react-router-dom';

export default class ProtectedRoute extends Component {
    static contextType=TicketContext;
  render() {
    const {user}=this.context;
    return user ? this.props.children:<Navigate to='/login'/>;
  }
}
