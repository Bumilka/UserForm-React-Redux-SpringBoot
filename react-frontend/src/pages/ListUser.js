import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUserList } from "../actions/UserActions";



class ListUser extends Component {

    componentDidMount() {
        this.props.getUserList();
    }
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

ListUser.propTypes = {
    getUserList: PropTypes.func.isRequired,
    users: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    users: state.user
});

export default connect
    (mapStateToProps,
        { getUserList })
    (ListUser);