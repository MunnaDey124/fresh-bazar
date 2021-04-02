import React from 'react';
import { Link } from 'react-router-dom';

const AdminHeader = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md  ">
                <ul className="navbar-nav nav">
                    <li className="nav-item">
                        <Link to="/addProduct">Add Product</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/manageProduct">Manage Product</Link>
                    </li>
                </ul>
             </nav>       
        </div>
    );
};

export default AdminHeader;