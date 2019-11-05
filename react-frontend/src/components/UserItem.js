import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteUser } from "../actions/UserActions";


class UserItem extends Component {
onDeleteClick(user_id){
    this.props.deleteUser(user_id);
}

    render() {
        const { user } = this.props
        return (
            <div className="card mb-1 bg-light">
                <div className="card-header text-primary">ID: {user.id}</div>
                <div className="card-body bg-light">
                    <h5 className="card-title"> name: {user.username}</h5>
                    <p className="card-text text-truncate "> email: {user.email}</p>
                    <button className="btn btn-danger ml-4"
                    onClick={this.onDeleteClick.bind(this, user.id)}
                    >Delete</button>
                </div>
            </div>
        );
    }
}

UserItem.propType = {
    deleteUser: PropTypes.func.isRequired
};

export default connect (null, {deleteUser}) (UserItem);