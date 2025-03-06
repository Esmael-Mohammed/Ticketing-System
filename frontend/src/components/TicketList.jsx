import React, { Component } from 'react'
import { TicketContext } from '../context/ContextProvider';
import instanceAxios from '../API/axios';

export default class TicketList extends Component {
    static contextType=TicketContext;
    handelChangeStatus=async(ticketId,newstatus)=>{
        const token=this.context.token;
        try {
            await instanceAxios.put(`/tickets/${ticketId}`,{status:newstatus},{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            this.props.refreshTickets();
        } catch (error) {
            console.log({message:error.response.data.message});
        }

    }
  render() {
    const {tickets}=this.props;
    const {user}=this.context;
    return (
        <div className="mt-4">
        <h2 className="text-lg font-bold mb-2">Tickets</h2>
        {tickets.length === 0 ? <p>No tickets found.</p> : tickets.map((ticket) => (
          <div key={ticket._id} className="p-4 border rounded mb-2">
            <h3 className="font-bold">{ticket.title}</h3>
            <p>{ticket.description}</p>
            <p className="mt-1 text-sm">Status: <span className="font-bold">{ticket.status}</span></p>

            {user.role === "admin" && (
              <div className="mt-2">
                <button className="bg-green-500 text-white px-3 py-1 mr-2" onClick={() => this.handleStatusChange(ticket._id, "in_progress")}>In Progress</button>
                <button className="bg-red-500 text-white px-3 py-1" onClick={() => this.handleStatusChange(ticket._id, "closed")}>Close</button>
              </div>
            )}
          </div>
        ))}
      </div>
    )
  }
}
