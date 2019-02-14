import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {createBrowserHistory} from "history";

import PersonalInfo from './personalinfo/personalinfo';

const history = createBrowserHistory();
var logo = require('./images/logo.png')
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            
                <div className="col-md-12">
                    <div className="row header">
                        <div className="col-md-3">
                            <img src={logo} alt="logo" className="img-fluid" width="100px" height="80px"/>
                    </div>
                        <div className="col-md-9">
                            <center> <h2> User Management System</h2> </center>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3 menubar">
                        
                            <Link className="nav-link" to="/dashboard" >Dashboard</Link>
                            <Link className="nav-link" to="/createuser" >Create User</Link>
                            <Link className="nav-link" to="/personalInfo" >Personal Info</Link>
                            <Link className="nav-link" to="/" >logout</Link>                            
                            
                        </div>
                        <div className="col-md-9">
                            
                        </div>

                    </div>
                </div>

            
         );
    }
}
 
export default Dashboard;
