import React, { Component } from 'react'
import { TicketContext } from '../context/ContextProvider';
import TicketList from '../components/TicketList';
import instanceAxios from '../API/axios';

export default class AdminDashboard extends Component {
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
            if (response.data && response.data.tickets) {
                this.setState({ tickets: response.data.tickets });
              } else {
                console.log('No tickets found or incorrect response format');
              }
            } catch (error) {
              console.error('Error fetching tickets:', error.response?.data?.message || error.message);
            }
    }
    componentDidMount(){
        this.fetchTickets();
    }
  render() {
    return (
        <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <TicketList tickets={this.state.tickets} refreshTickets={this.fetchTickets} />
      </div>
    )
  }
}
