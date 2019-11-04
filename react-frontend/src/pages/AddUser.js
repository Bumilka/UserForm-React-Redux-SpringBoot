import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addUserItem } from "../actions/UserActions";


class AddUser extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            surname: "",
            email: "",
            selectedOption: "",
            favoriteCat: "Bengal Cat",
            textarea: "",
            sendToEmail: "False"
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.radioChange = this.radioChange.bind(this);
        this.acceptCheckbox = this.acceptCheckbox.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        const newUser = {
            username: this.state.username,
            surname: this.state.surname,
            email: this.state.email,
            selectedOption: this.state.selectedOption,
            favoriteCat: this.state.favoriteCat,
            textarea: this.state.textarea,
            sendToEmail: this.state.sendToEmail
        };
        // console.log(newUser);
        this.props.addUserItem(newUser, this.props.history)
    }
    radioChange(e) {
        this.setState({
            selectedOption: e.currentTarget.value
        });
    }
    acceptCheckbox(e) {
        this.setState({
            sendToEmail: e.currentTarget.value
        });
    }

    render() {
        return (

            <div className="addUser">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h4 className="display-4 text-center">Add /Update User</h4>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="username"
                                        value={this.state.username}
                                        onChange={this.onChange}
                                        className="form-control form-control-lg"
                                        placeholder="Username at least 3 characters"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="surname"
                                        value={this.state.surname}
                                        onChange={this.onChange}
                                        className="form-control form-control-lg"
                                        placeholder="Surname - must start with 'Dr'"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                        className="form-control form-control-lg"
                                        placeholder="exzample@com"
                                    />
                                </div>
                                <div className="form-group">
                                    <p>Do you like cats?</p>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input
                                            type="radio"
                                            value="Yes"
                                            checked={this.state.selectedOption === "Yes"}
                                            onChange={this.radioChange}
                                        />
                                        Yes
                                        <input
                                            type="radio"
                                            value="No"
                                            checked={this.state.selectedOption === "No"}
                                            onChange={this.radioChange}
                                        />
                                        No
                                    </div>
                                </div>
                                <div className="form-group">
                                    <p>If selected yes, please select You favorite cat</p>
                                    <select
                                        name="favoriteCat"
                                        value={this.state.favoriteCat}
                                        onChange={this.onChange}
                                        className="form-control form-control-lg"
                                    >
                                        <option value="Bengal Cat">Bengal Cat</option>
                                        <option value="Maine Coon">Maine Coon</option>
                                        <option value="Siamese Cat">Siamese Cat</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <p>If selected not, please write why don't you like cars?</p>
                                    <textarea
                                        name="textarea"
                                        value={this.state.textarea}
                                        onChange={this.onChange}
                                        placeholder="Answer is not mandatory."
                                        className="form-control form-control-lg"
                                    >
                                    </textarea>
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            name="sendToEmail"
                                            value="True"
                                            checked={this.state.sendToEmail === "True"}
                                            onChange={this.acceptCheckbox}
                                            className="custom-control-input"
                                            id="customCheck"
                                        />

                                        <label className="custom-control-label">Do you want to receive registration email?</label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block mt-4">SUBMIT</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

AddUser.protoTypes = {
    addUserItem: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors
})

export default connect(mapStateToProps, { addUserItem })(AddUser);