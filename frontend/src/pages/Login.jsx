import React, { Component } from 'react'

export default class Login extends Component {
    state = { email: "", password: "", redirect: false };
  static contextType = AuthContext;
  handleSubmit = async (e) => {
    e.preventDefault();
    await this.context.login(this.state.email, this.state.password);
    this.setState({ redirect: true });
  };
  render() {
    if (this.state.redirect) return <Navigate to="/" />;
    return (
        <div className="max-w-md mx-auto p-6">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="email" className="w-full p-2 border" placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} />
          <input type="password" className="w-full p-2 border mt-2" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} />
          <button className="w-full bg-blue-500 text-white p-2 mt-2" type="submit">Login</button>
        </form>
      </div>
    )
  }
}
