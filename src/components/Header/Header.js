import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './header.css';
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div>
            <nav className="navbar navbar-expand-md  ">
                <ul className="logo">
                    <li><Link to="/home">Fresh Bazar</Link></li>
                </ul> 
                <ul className="navbar-nav nav">
                    <li className="nav-item">
                        <Link to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/orders">Orders</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/admin">Admin</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/deals">Deals</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/login">login</Link>
                    </li>
                    <li>
                    <p>{loggedInUser.name}</p>
                    </li>
                </ul>    
            </nav>
        </div>
    );
};

export default Header;