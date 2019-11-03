import React, { Component } from 'react';



class DashboardUser extends Component {
    render() {
        return (
            <div className="container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header bg-secondary text-white">
                                    <h3>Users not like cats</h3>
                                </div>
                            </div>
                            <div className="card mb-1 bg-light">

                                <div className="card-header text-primary">
                                    ID: User
                            </div>
                                <div className="card-body bg-light">
                                    <h5 className="card-title">Username</h5>
                                    <p className="card-text text-truncate ">
                                        email@com
                                </p>
                                    <a href="#" className="btn btn-primary">
                                        View / Update
                                </a>
                                    <button className="btn btn-danger ml-4">
                                        Delete
                                </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header bg-success text-white">
                                    <h3>Users like cats</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardUser;