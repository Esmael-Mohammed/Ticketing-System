import React, { Component, createContext } from 'react'
import instanceAxios from '../API/axios';

const TicketContext=createContext();
export default class ContextProvider extends Component {
    state={
        user:null,
        token:localStorage.getItem('token')||'',
    }
    login=async(email,password)=>{
        try {
            const response=await instanceAxios.post('/login',{email,password});
            const {token,role}=response.data;
            this.setState({user:role,token})
            localStorage.setItem('token',token);
        } catch (error) {
            console.log({message:error.response.data.message});
        }
    }
    logout=()=>{
        this.setState({user:null,token:''});
            localStorage.removeItem('token');
    }

  render() {
    return (
        <TicketContext.Provider value={{...this.state,login:this.login,logout:this.logout}}>
            {this.props.children}
        </TicketContext.Provider>
    )
  }

}
export const TicketConsumer=TicketContext.Consumer;
export {TicketContext};
