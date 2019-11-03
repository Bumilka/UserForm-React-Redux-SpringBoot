import React from 'react';


export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <i className="fa fa-home"> Registation Users</i>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <a href="/addUser" className="navbar-brand">
                        <i className="fas fa-plus-circle"> Form to register new User</i>
                    </a>
                    <a href="/DashboardUser" className="navbar-brand">
                        <i className="fas fa-address-card"> List with registered Users</i>
                    </a>
                </div>
            </nav>
        </div>
    )
}