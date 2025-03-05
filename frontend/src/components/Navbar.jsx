import React, { Component } from 'react'
import { TicketContext } from './../context/ContextApi';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    static contextType=TicketContext;
  render() {
    const {user,logout}=this.context;
    return (
      <nav className='p-4 bg-gray-800 text-white flex justify-between'>
        <h1 className='text-lg font-bold '>Support System</h1>
        <div>
            {user?(
                <>
                <Link className='mr-4' to='/'>Dashboard</Link>
                <button onClick={logout} className='bg-red-500 px-4 py-2 rounded'> Logout</button>
                </>
            ):(
                <>
                <Link className='mr-4'to='/login'>Login</Link>
                <Link className='bg-blue-500 px-4 py-2 rounded'to='/signup'>Signup</Link>
                </>

            )
            }
        </div>
      </nav>
    )
  }
}
