import React, { Component } from 'react';



class AddUser extends Component {
    render() {
        return (

            <div className="addUser">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h4 className="display-4 text-center">Add /Update User</h4>
                            <form>
                                <div className="form-group">
                                    <input type="text" name="firstname" class="form-control form-control-lg" nameName="summary" placeholder="Username at least 3 characters" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="surname" class="form-control form-control-lg" nameName="summary" placeholder="Surname - must start with 'Dr'" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="email" class="form-control form-control-lg" nameName="summary" placeholder="exzample@com" />
                                </div>
                                <div className="form-group">
                                    <p>Do you like cats?</p>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" class="custom-control-input" id="customRadio" name="example" value="customEx" />
                                        <label className="custom-control-label" for="customRadio">Yes</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" class="custom-control-input" id="customRadio2" name="example" value="customEx" />
                                        <label className="custom-control-label" for="customRadio2">No</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <p>If selected yes, please select You favorite cat</p>
                                    <select className="form-control form-control-lg" nameName="status">
                                        <option value="Bengal Cat">Bengal Cat</option>
                                        <option value="Maine Coon">Maine Coon</option>
                                        <option value="Siamese Cat">Siamese Cat</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <p>If selected not, please write why don't you like cars?</p>
                                    <textarea className="form-control form-control-lg" placeholder="Answer is not mandatory." nameName="acceptanceCriteria"></textarea>
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck" name="example1" value="customEx" />
                                        <label className="custom-control-label" for="customCheck">Do you want to receive registration email?</label>
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

export default AddUser;