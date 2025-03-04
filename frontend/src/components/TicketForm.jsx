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
        <form onSubmit={this.handleSubmit} className='mt-4'>
            <input type="text" placeholder='New Ticket' value={this.state.title} 
            onChange={(e)=>this.setState({title:e.target.value})}
            className='border p-2 w-full'
            />
            <button type='submit' className='bg-blue-500 text-white p-2 mt-2'>
                Add Ticket
            </button>
        </form>
      </div>
    )
  }
}
