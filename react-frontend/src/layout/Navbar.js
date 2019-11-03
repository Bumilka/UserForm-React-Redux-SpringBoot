import React from 'react';
import {Link} from "react-router-dom";


export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <i className="fa fa-home"> Registation App</i>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <Link to="/addUser" className="navbar-brand">
                        <i className="fas fa-plus-circle"> Form to register new User</i>
                    </Link>
                    <Link to="/listUsers" className="navbar-brand">
                        <i className="fas fa-address-card"> List with registered Users</i>
                    </Link>
                </div>
            </nav>
        </div>
    )
}