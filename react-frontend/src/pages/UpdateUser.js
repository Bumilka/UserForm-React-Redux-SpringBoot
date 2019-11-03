import React, { Component } from 'react';



class UpdateUser extends Component {
    render() {
        return (
            <div className="addProjectTask">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h4 className="display-4 text-center">Add /Update Project Task</h4>
                            <form>
                                <div className="form-group">
                                    <input type="text" class="form-control form-control-lg" nameName="summary" placeholder="Project Task summary" />
                                </div>
                                <div class="form-group">
                                    <textarea className="form-control form-control-lg" placeholder="Acceptance Criteria" nameName="acceptanceCriteria"></textarea>
                                </div>
                                <div className="form-group">
                                    <select className="form-control form-control-lg" nameName="status">
                                        <option value="">Select Status</option>
                                        <option value="TO_DO">TO DO</option>
                                        <option value="IN_PROGRESS">IN PROGRESS</option>
                                        <option value="DONE">DONE</option>
                                    </select>
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateUser;