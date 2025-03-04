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
      <>
        <form onSubmit={this.handleSubmit} className='mt-60 flex flex-col justify-center max-w-md mx-auto p-5 bg-white shadow-md rounded-sm items-center'>
            <input type="text" placeholder='New Ticket' value={this.state.title} 
            onChange={(e)=>this.setState({title:e.target.value})}
            className='border border-gray-400 w-full rounded-md'
            />
            <button type='submit' className='bg-gray-500 text-white p-2 mt-2 rounded-md'>
                Add Ticket
            </button>
        </form>
      </>
    )
  }
}
