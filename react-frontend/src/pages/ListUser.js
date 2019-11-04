import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUserList } from "../actions/UserActions";
import UserItem from "../components/UserItem";



class ListUser extends Component {

    componentDidMount() {
        this.props.getUserList();
    }
    render() {
        const { users } = this.props.users;

        let ListUserContent;
        let userLikeCats = [];
        let userDontLikeCats = [];

        const SearchUser = users => {
            if (users.length < 1) {
                return (
                    <div className="alert alert-info tex-center" role="alert">
                        No User on this board
                    </div>
                )
            } else {
                const profils = users.map(user => (
                    <UserItem  key={user.id} user={user} />
                ));

                for (let i = 0; i < users.length; i++) {
                    if (profils[i].props.user.selectedOption === "Yes") {
                        userLikeCats.push(profils[i]);
                    }
                    if (profils[i].props.user.selectedOption === "No") {
                        userDontLikeCats.push(profils[i]);
                    }
                }
            }
        };
        
        SearchUser(users);
       

        return (
            <div className="container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card text-center mb-3">
                                <div className="card-header bg-secondary text-white">
                                    <h3>Users who don't like cats</h3>
                                </div>
                            </div>
                            {userLikeCats}
                        </div>

                        <div className="col-md-6">
                            <div className="card text-center mb-3">
                                <div className="card-header bg-success text-white">
                                    <h3>Users who like cats</h3>
                                </div>
                            </div>
                            {userDontLikeCats}
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

export default connect(
    mapStateToProps,
    { getUserList }
)(ListUser);