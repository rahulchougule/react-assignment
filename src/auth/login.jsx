import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container">
                
                <div className="col-md-6 form">
                    <form>
                        <div class="form-group">
                            <label for="username"> User Name</label>
                            <input type="text" class="form-control" id="username" required/>
                        </div>
                        <div class="form-group">
                            <label for="password">Password:</label>
                            <input type="password" class="form-control" id="password" required/>
                        </div>
                        <div >
                        <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>

                </div>
            </div>

         );
    }
}
 
export default Login;