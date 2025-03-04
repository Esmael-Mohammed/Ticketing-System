import React, { Component, createContext } from 'react'
import instanceAxios from './../API/axios';

const TicketContext=createContext();
export default class ContextApi extends Component {
    state={
        isAuthenticated:false,
        user:null,
        token:localStorage.getItem('token')||'',
    }
    componentDidMount(){
        if(this.state.token){
            instanceAxios.defaults.headers.common['Authorization'=`Bearer ${this.state.token}`];
            instanceAxios.get('/login').then((res)=>
                this.setState({isAuthenticated:true,user:res.data})

            ).catch(()=>this.logout())
        }
    
    }
    login=(userData,token)=>{
        this.setState({isAuthenticated:true,user:userData,token});
        localStorage.setItem('token',token);
    }
    logout=()=>{
        this.setState({isAuthenticated:false,user:null,token:''})
        localStorage.removeItem('token')
    }

  render() {
    return (
        <TicketContext.Provider value={{...this.state,login:this.login,logout:this.logout}}>
            {this.props.children}
        </TicketContext.Provider>
    )
  }
}
