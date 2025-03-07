import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { TicketContext } from "../context/ContextProvider";

export default class ProtectedRoute extends Component {
  render() {
    return (
      <TicketContext.Consumer>
        {({ user }) => {
          if (!user) {
            return <Navigate to="/login" />;
          }

          return this.props.children;   
        }}
      </TicketContext.Consumer>
    );
  }
}
