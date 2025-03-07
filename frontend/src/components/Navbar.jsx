import React, { Component } from 'react';
import { TicketContext } from '../context/ContextProvider';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  static contextType = TicketContext;

  handleLogout = () => {
    this.context.logout();  // Calls the logout function from context
    window.location.href = '/login';  // Redirect to login page
  };

  render() {
    const { user } = this.context;

    return (
      <nav className="p-4 bg-gray-800 text-white flex justify-between">
        <h1 className="text-lg font-bold">Ticketing System</h1>
        <div>
          {user ? (
            <>
              <Link className="mr-4" to={user?.role === 'admin' ? '/admin' : '/'}>
                Dashboard
              </Link>
              <span className="mr-4">Welcome, {user?.name}</span>  {/* Display user name */}
              <button
                onClick={this.handleLogout}
                className="bg-red-500 px-4 py-2 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="mr-4" to="/login">
                Login
              </Link>
              <Link className="bg-blue-500 px-4 py-2 rounded" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </nav>
    );
  }
}

export default Navbar;
