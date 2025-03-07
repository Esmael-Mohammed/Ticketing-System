
 import React, { Component } from 'react'
import './App.css';
import ContextProvider from './context/ContextProvider';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Route, Routes } from 'react-router-dom';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { TicketContext } from './context/ContextProvider';
 
  class App extends Component {
   render() {
     return (
       <>

       <ContextProvider>
        {/* <Router> */}

        <Navbar/>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={<ProtectedRoute><UserDashboard/></ProtectedRoute>}
        />
        <Route
          path="/admin"
          element={<AdminRoute/>}
        />
      </Routes>
        {/* </Router> */}
        
       </ContextProvider>
       </>
     )
   }
 }
 
//  Admin Route Wrapper
const AdminRoute = () => {
  return (
    <TicketContext.Consumer>
      {({ user }) => (user?.role === "admin" ? <AdminDashboard /> : <h2>Access Denied</h2>)}
    </TicketContext.Consumer>
  );
};
export default App;
