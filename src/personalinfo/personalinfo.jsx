import React, { Component } from 'react';   

class PersonalInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <div className="container">
                <div className="col-md-8">
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

                            <u> <h3> Address </h3></u>
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
                                <input type="text" class="form-control" id="gender" />
                            </div>

                            <div className="form-group">
                                <label for="age"> Age </label>
                                <input type="date" id="age" class="form-control" />
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
         );
    }
}
 
export default PersonalInfo;