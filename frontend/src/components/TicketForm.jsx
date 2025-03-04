import React, { Component } from 'react'

export default class TicketForm extends Component {
    state={
        title:'',
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.createTicket(this.state.title);
        this.setState({title:''});
    };
  render() {
    return (
      <div>
        Ticket Form
      </div>
    )
  }
}
