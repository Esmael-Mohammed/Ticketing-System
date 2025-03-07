import React, { Component } from 'react';
import { TicketContext } from '../context/ContextProvider';
import TicketForm from '../components/TicketForm';
import TicketList from '../components/TicketList';
import instanceAxios from '../API/axios';

export default class UserDashboard extends Component {
  state = {
    tickets: [],
  };

  static contextType = TicketContext;

  fetchTickets = async () => {
    const token = this.context.token;
    if (!token) {
      console.error("No token available for authentication.");
      return;
    }
    try {
      console.log("Fetching tickets with token:", token);
      const response = await instanceAxios.get('/tickets', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("API response:", response);

      if (response && response.data && response.data.tickets) {
        this.setState({ tickets: response.data.tickets });
      } else {
        console.log("No tickets found or response format is incorrect.");
      }
    } catch (error) {
      console.error("Error fetching tickets:", error.response ? error.response.data.message : error.message);
    }
  };

  componentDidMount() {
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
    );
  }
}
