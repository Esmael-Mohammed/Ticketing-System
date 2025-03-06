import React, { Component } from 'react'
import { TicketContext } from '../context/ContextProvider';
import instanceAxios from '../API/axios';

export default class TicketForm extends Component {
   state={
    title:'',
    description:''
   };
   static contextType=TicketContext;
   handleSubmit=async(e)=>{
    e.preventDefault();
    const token=this.context.token;
    await instanceAxios.post('/tickets',{
      title:this.state.title,
      description:this.state.description
    },
  {
    headers:{
      Authorization:`Bearer ${token}`
    }
  });
  this.setState({title:'',description:''});
  this.props.refreshTicket();

   }
  render() {
    return (
      <div className="p-4 border rounded bg-gray-100 flex flex-col justify-center items-center">
        <h2 className="text-lg font-bold">Create Ticket</h2>
        <form onSubmit={this.handleSubmit}>
          <input className="w-full p-2 border" type="text" placeholder="Title" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
          <textarea className="w-full p-2 border mt-2" placeholder="Description" value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })}></textarea>
          <button className="w-full bg-blue-500 text-white p-2 mt-2" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
