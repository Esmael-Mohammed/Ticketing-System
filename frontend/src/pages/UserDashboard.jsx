import React, { Component } from 'react'
import { TicketContext } from '../context/ContextProvider';

export default class UserDashboard extends Component {
    state={
        tickets:[],
    }
    static contextType=TicketContext;
    fetchTickets=async()=>{
        const token=this.context.token;
        try {
            const response=await instanceAxios.get('/tickets',{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });
            this.setState({tickets:response.data});
        }
        catch (error) {
            console.log({message:error.response.data.message});
        }
    }
    componentDidMount(){
        this.fetchTickets();
    }
  render() {
    return (
        <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
        {/* Ticket creation and Lists */}
        <TicketForm refreshTickets={this.fetchTickets} />
        <TicketList tickets={this.state.tickets} refreshTickets={this.fetchTickets} />
      </div>
    )
  }
}
