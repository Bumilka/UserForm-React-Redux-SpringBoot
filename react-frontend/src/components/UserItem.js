import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";


class UserItem extends Component {
    render() {
        return (
            <div className="card mb-1 bg-light">
                <div className="card-header text-primary">NAME:</div>
                <div className="card-body bg-light">
                    <h5 className="card-title"></h5>
                    <p className="card-text text-truncate "></p>
                    <button className="btn btn-danger ml-4">Delete</button>
                </div>
            </div>
        );
    }
}

export default UserItem;