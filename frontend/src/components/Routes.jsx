import React from 'react'
import Navbar from './Navbar/Navbar'
import { Switch, Route } from "react-router-dom";
import Login from "./Auth/Login"
import Signup from './Auth/Signup';
import Dashboard from './HomePage/Dashboard';
export default function Routes() {
    
  let token = localStorage.getItem("token");
    return (
      <div>
        <Route>
          <Navbar />{" "}
          <Switch>{token ? <AuthorizRoute /> : <UnAuthorizRoute />}</Switch>
        </Route>
      </div>
    );
}

function AuthorizRoute() {
  return (
    <Routes to="/dashboard">
      <Dashboard />
    </Routes>
  );
}

function UnAuthorizRoute() {
  return (
    <>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
    </>
  );
}

