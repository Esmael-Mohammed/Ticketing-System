import React, { Component } from 'react'
import instanceAxios from '../API/axios';
import { Navigate } from 'react-router-dom';

export default class Signup extends Component {
    state = { name: "", email: "", password: "", role: "user", redirect: false };

  handleSubmit = async (e) => {
    e.preventDefault();
    instanceAxios.post('/signup',this.state);
    this.setState({ redirect: true });
  };
  render() {
    if (this.state.redirect) return <Navigate to="/login" />;
    return (
        <div className="max-w-md mx-auto p-6">
        <h2 className="text-xl font-bold mb-4">Signup</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" className="w-full p-2 border" placeholder="Username" onChange={(e) => this.setState({ name: e.target.value })} />
          <input type="email" className="w-full p-2 border mt-2" placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} />
          <input type="password" className="w-full p-2 border mt-2" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} />
          <select className="w-full p-2 border mt-2" onChange={(e) => this.setState({ role: e.target.value })}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button className="w-full bg-green-500 text-white p-2 mt-2" type="submit">Signup</button>
        </form>
      </div>
    )
  }
}
