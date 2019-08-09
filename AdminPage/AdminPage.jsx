import React from 'react';

import { userService } from '@/_services';

class AdminPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: null
        };
    }

    componentDidMount() {
        userService.getAll().then(users => this.setState({ users }));
    }

    render() {
        const { users } = this.state;
        return (
            
                <div class="table-responsive">
                    
                        <h1>Admin</h1>
                        <p>This page can only be accessed by administrators.</p>
                    
                  
                    <table class="table table-striped table-hover ">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">User name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Email Confirmed</th>                            
                                <th scope="col">Phone Number</th>
                                <th scope="col">Pnone Number Confirmed</th>
                                <th scope="col">Two Factor Enabled</th>
                                <th scope="col">Lockout End</th>
                                <th scope="col">Lockout Enabled</th>
                                <th scope="col">Access Failed Count</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Photo</th>
                                <th scope="col">Is Deleted</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>     
                    <div>
                        <button className="btn btn-primary">
                            Create
                        </button>
                        <button className="btn btn-warning">
                            Update
                        </button>
                        <button className="btn btn-danger">
                            Delete
                        </button>
                    </div>         
                 </div>
        );
    }
}

export { AdminPage };