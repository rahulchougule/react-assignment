import React, { Component } from 'react';   
import { Link } from "react-router-dom";
import PersonalInfoService from "./../service/personalinfoservice.js";

var logo = require('./../images/logo.png')


class PersonalInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            
            firstName:"",
            middleName:"",
            lastName:"",            
            gender:"",
            dob:"",
            age:"",
            flat:"",
            societyName:"",
            areaName:"",
            city:"",
            pinCode:"",
            phoneNo:"",
            mobileNo:"",
            physicalDisablity:"",
            maritalStatus:"",
            educationStatus:"",
            birthSign:""
        }

         
        this.token = sessionStorage.getItem("token");  

        this.serve = new PersonalInfoService();
    }

    onChangeInput(e){        
        this.setState({[e.target.name]:e.target.value})
    }

    onClickSave(){
        let personalinfo = {
            firstName:this.state.firstName,
            middleName:this.state.middleName,
            lastName:this.state.lastName,            
            gender:this.state.gender,
            dob:this.state.dob,
            age:this.state.age,
            flat:this.state.flat,
            societyName:this.state.societyName,
            areaName:this.state.areaName,
            city:this.state.city,
            pinCode:this.state.pinCode,
            phoneNo:this.state.phoneNo,
            mobileNo:this.state.mobileNo,
            physicalDisablity:this.state.physicalDisablity,
            maritalStatus:this.state.maritalStatus,
            educationStatus:this.state.educationStatus,
            birthSign:this.state.birthSign
        }

        this.serve.addPersonalInfo(personalinfo, this.token)
        .then(resp => resp.json())
        .then(resp=>resp.data)
        .catch(error => console.log(error.status));
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
                                <input type="text" class="form-control" id="firstName" 
                                  onChange={this.onChangeInput.bind(this)}
                                  name="firstName"
                                  tabindex="1"/>
                            </div>

                            <div className="form-group">
                                <label for="lastName"> Last Name </label>
                                <input type="text" class="form-control" id="lastName" 
                                  onChange={this.onChangeInput.bind(this)}
                                  name="lastName"
                                  tabindex="3"/>
                            </div>

                            <div className="form-group">
                                <label for="dob"> Date of Birth </label>
                                <input type="date" id="dob" class="form-control" 
                                  onChange={this.onChangeInput.bind(this)}
                                  name="dob"
                                  tabindex="5"/>
                            </div>

                            <u> <h5> Address </h5></u>
                            <div className="form-group">
                                <label for="flatNo"> Flat No </label>
                                <input type="text" id="flatNo" class="form-control"
                                  onChange={this.onChangeInput.bind(this)}
                                  name="flatNo"
                                  tabindex="7" />
                            </div>

                            <div className="form-group">
                                <label for="areaName"> Area Name</label>
                                <input type="text" id="areaName" class="form-control" 
                                  onChange={this.onChangeInput.bind(this)}
                                  name="areaName"
                                  tabindex="9"/>
                            </div>
                            
                            <div className="form-group">
                                <label for="mobileNo"> Mobile No</label>
                                <input type="text" id="mobileNo" class="form-control" 
                                  onChange={this.onChangeInput.bind(this)}
                                  name="mobileNo"
                                  tabindex="11"/>
                            </div>

                            <div className="form-group">
                                <label for="physicalDisablity"> Physical Disability</label>
                                <input type="text" id="physicalDisablity" class="form-control" 
                                  onChange={this.onChangeInput.bind(this)}
                                  name="physicalDisablity"
                                  tabindex="15"/>
                            </div>

                            <div className="form-group">
                                <label for="educationStatus"> Educational Status</label>
                                <input type="text" id="educationStatus" class="form-control" 
                                  onChange={this.onChangeInput.bind(this)}
                                  name="educationStatus"
                                  tabindex="17"/>
                            </div>

                    </div>
                    <div className="col-md-6">
                    <div className="form-group">
                                <label for="middleName"> Middle Name </label>
                                <input type="text" class="form-control" id="firstName" 
                                  onChange={this.onChangeInput.bind(this)}
                                  name="middleName"
                                  tabindex="2"/>
                            </div>

                            <div className="form-group">
                                <label for="gender"> Gender </label>
                                <select class="form-control" id="gender"
                                onChange={this.onChangeInput.bind(this)}
                                name="gender" tabindex="4">
                                 <option value="Male"> Male </option>
                                 <option value="Female">Female</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label for="age"> Age </label>
                                <input type="text" id="age" class="form-control" 
                                  onChange={this.onChangeInput.bind(this)}
                                  name="age" 
                                  tabindex="6"/>
                            </div>
                                <br/><br/>
                            <div className="form-group">
                                <label for="societyName"> Society Name</label>
                                <input type="text" id="societyName" class="form-control"
                                  onChange={this.onChangeInput.bind(this)}
                                  name="societyName" 
                                  tabindex="8"/>
                            </div>

                            <div className="form-group">
                                <div className="row">
                                <div className="col-md-6"> 
                                <label for="city"> City </label>
                                <input type="text" id="city" class="form-control" 
                                  onChange={this.onChangeInput.bind(this)}
                                  name="city"
                                  tabindex="10"/>
                                </div>
                                <div className="col-md-6"> 
                                <label for="pin"> PIN </label>
                                <input type="text" id="pin" class="form-control" 
                                  onChange={this.onChangeInput.bind(this)}
                                  name="pin" 
                                  tabindex="12"/>
                                </div>
                                </div>
                            </div>

                            
                            <div className="form-group">
                                <label for="phoneNo"> Phone No</label>
                                <input type="text" id="phoneNo" class="form-control" 
                                  onChange={this.onChangeInput.bind(this)}
                                  name="phoneNo"
                                  tabindex="13"/>
                            </div>

                            <div className="form-group">
                                <label for="maritalStatus"> Marital Status</label>
                                <select name="maritalStatus" id="maritalStatus" class="form-control" tabindex="14">
                                    <option value="Unmarried"> Unmarried </option>
                                    <option value="Married"> Married </option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label for="birthSign"> Birth Sign</label>
                                <input type="text" id="birthSign" class="form-control" 
                                  onChange={this.onChangeInput.bind(this)}
                                  name="birthSign"
                                  tabindex="16"/>
                            </div>
                    </div>
                    </div>
                    
                    <input type="button" value="Add" className="btn btn-success"
                    onClick={this.onClickSave.bind(this)} tabindex="18"/>
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