import React, { Component } from 'react';   
import { Link } from "react-router-dom";

var logo = require('./../images/logo.png')


class PersonalInfo extends Component {
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
                        <div className="container">
                <div className="col-md-10">
                <center><h2> Add Personal Information </h2></center>
                <form>
                    <div className="row">
                    <div className="col-md-6">
                    <div className="form-group">
                                <label for="firstName"> First Name </label>
                                <input type="text" class="form-control" id="firstName" />
                            </div>

                            <div className="form-group">
                                <label for="lastName"> Last Name </label>
                                <input type="text" class="form-control" id="lastName" />
                            </div>

                            <div className="form-group">
                                <label for="dob"> Date of Birth </label>
                                <input type="date" id="dob" class="form-control" />
                            </div>

                            <u> <h5> Address </h5></u>
                            <div className="form-group">
                                <label for="flatNo"> Flat No </label>
                                <input type="text" id="flatNo" class="form-control" />
                            </div>

                            <div className="form-group">
                                <label for="areaName"> Area Name</label>
                                <input type="text" id="areaName" class="form-control" />
                            </div>
                            
                            <div className="form-group">
                                <label for="mobileNo"> Mobile No</label>
                                <input type="text" id="mobileNo" class="form-control" />
                            </div>

                    </div>
                    <div className="col-md-6">
                    <div className="form-group">
                                <label for="middleName"> Middle Name </label>
                                <input type="text" class="form-control" id="firstName" />
                            </div>

                            <div className="form-group">
                                <label for="gender"> Gender </label>
                                <select class="form-control" id="gender">
                                 <option value="Male"> Male </option>
                                 <option value="Female">Female</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label for="age"> Age </label>
                                <input type="text" id="age" class="form-control" />
                            </div>
                                <br/><br/>
                            <div className="form-group">
                                <label for="societyName"> Society Name</label>
                                <input type="text" id="societyName" class="form-control" />
                            </div>

                            <div className="form-group">
                                <div className="row">
                                <div className="col-md-6"> 
                                <label for="city"> City </label>
                                <input type="text" id="city" class="form-control" />
                                </div>
                                <div className="col-md-6"> 
                                <label for="city"> PIN </label>
                                <input type="text" id="city" class="form-control" />
                                </div>
                                </div>
                            </div>

                            
                            <div className="form-group">
                                <label for="phoneNo"> Phone No</label>
                                <input type="text" id="phoneNo" class="form-control" />
                            </div>

                    </div>
                    </div>
                    
                    <input type="button" value="Add" className="btn btn-success"/>
                </form>
                </div>
                 </div>

                        </div>

                    </div>
                </div>

            
         );
    }
}
 
export default PersonalInfo;