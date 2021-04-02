import React, { createContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Deals from "./components/Deals/Deals";
import Admin from "./components/Admin/Admin";
import Orders from "./components/Orders/Orders";
import CheckOut from "./components/Checkout/CheckOut";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser]=useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
      <Header></Header>
      <Switch>
        <PrivateRoute path="/orders/:productId">
          <Orders></Orders>
        </PrivateRoute>
        <PrivateRoute path="/checkout/:productId">
            <CheckOut/>
        </PrivateRoute>
        <PrivateRoute path="/admin">
          <Admin />
        </PrivateRoute>
        <Route path="/deals">
          <Deals />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
