import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { TicketContext } from '../context/ContextProvider';

export default class Login extends Component {
  state = { email: "", password: "", redirectTo: null };

  static contextType = TicketContext;

  handleSubmit = async (e) => {
    e.preventDefault();
    
    const success = await this.context.login(this.state.email, this.state.password);
    if (!success) return;  // If login fails, do nothing

    const updatedUser = JSON.parse(localStorage.getItem('user'));  
    if (updatedUser?.role === "admin") {
      this.setState({ redirectTo: "/admin" });  
    } else {
      this.setState({ redirectTo: "/" });  
    }
  };

  render() {
    if (this.state.redirectTo) {
      return <Navigate to={this.state.redirectTo} />;
    }

    return (
      <div className="max-w-md mx-auto p-6">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            className="w-full p-2 border rounded-md"
            placeholder="Email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            className="w-full p-2 border mt-2 rounded-md"
            placeholder="Password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <button className="w-full bg-gray-800 text-white p-2 mt-2 rounded-md" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}
