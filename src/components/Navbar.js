import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
function Navbar() {

    return (
        <>
            <nav className="navBar navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-container container-fluid">
                    <div className='logo'>
                        SEMA ABDULLAYEVA
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              
              <li className="nav-item">
               
                <Link className="nav-link" to="/pages/About">About</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/pages/Portfolio">Portfolio </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/pages/Contact">Contact </Link>
              </li>
            </ul>
          </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar