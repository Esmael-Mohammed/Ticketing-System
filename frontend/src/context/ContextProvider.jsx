import React, { Component, createContext } from 'react';
import instanceAxios from '../API/axios';

const TicketContext = createContext();

export default class ContextProvider extends Component {
  state = {
    user: JSON.parse(localStorage.getItem('user')) || null,  
    token: localStorage.getItem('token') || '',
  };

  login = async (email, password) => {
    try {
      const response = await instanceAxios.post('/login', { email, password });
      console.log("Login API Response:", response.data);
  
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));  
  
      this.setState({ user, token }, () => console.log("User updated in context:", this.state.user));  
  
      return true;
    } catch (error) {
      console.log({ message: error.response?.data?.message || error.message });
      return false;
    }
  };

  logout = () => {
    this.setState({ user: null, token: '' });
    localStorage.removeItem('token');
    localStorage.removeItem('user');  
  };

  render() {
    return (
      <TicketContext.Provider
        value={{
          ...this.state,
          login: this.login,
          logout: this.logout,
        }}
      >
        {this.props.children}
      </TicketContext.Provider>
    );
  }
}

export const TicketConsumer = TicketContext.Consumer;
export { TicketContext };
