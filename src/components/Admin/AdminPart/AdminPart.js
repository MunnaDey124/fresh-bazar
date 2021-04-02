import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AdminHeader from '../adminHeader/AdminHeader';
import AddProduct from '../productManagement/AddProduct';
import ManageProduct from '../productManagement/ManageProduct';

const AdminPart = () => {
    return (
        <Router>
            <AdminHeader/>
            <Switch>
                <Route path="/addProduct">
                    <AddProduct/>
                </Route>
                <Route path="/manageProduct">
                    <ManageProduct/>
                </Route>
            </Switch>
        </Router>
    );
};

export default AdminPart;