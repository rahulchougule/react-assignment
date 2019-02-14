import React, { Component } from 'react';
import { Link } from "react-router-dom";

import UserService from "./../service/userservice.js";

var logo = require('./../images/logo.png')

class CreatUser extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userName:"",
            email:"",
            password:"",
            role:"",
            Users:[]
         }

         this.token = sessionStorage.getItem("token");
         //console.log(this.authToken);
         
        this.serve = new UserService();
    }

    onChangeInput(e){        
        this.setState({[e.target.name]:e.target.value})
    }

    onClickSave(e){
        let user ={
            userName:this.state.userName,
            email:this.state.email,
            password:this.state.password,
            role:this.state.role
        }

        this.serve.createUser(user, this.token)
        .then(resp => resp.json() )
        .then(resp => resp.data)
        .catch(error => console.log(error.status));
    }

    componentDidMount(){
        let users = this.serve.getUser()
                    .then((data) => data.json())
                    .then((data) => {this.setState({Users:data.data})})
                    
                    .catch(error => {
                        console.log(`Error occured ${error.status}`);
                    });

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
             <div className="row">
                <div className="col-md-5 userform">
                
                    <p>  
                        <h2> <center>Create new user </center> </h2>
                    Please fill following details to create new user. New user will be able to 
                    login only after the aproval of Admin. 
                    </p>
                    
                    <form>
                         <div className="form-group"> 
                         <label for="userName"> User Name </label>
                         <input type="text" class="form-control" id="userName"
                         onChange={this.onChangeInput.bind(this)}
                         name="userName"
                         />
                         </div>   
                        
                         <div className="form-group"> 
                         <label for="email"> Email </label>
                         <input type="email" class="form-control" id="email"
                         onChange={this.onChangeInput.bind(this)}
                         name="email"/>
                         </div>

                         <div className="form-group"> 
                         <label for="password"> Password </label>
                         <input type="password" class="form-control" id="password"
                         onChange={this.onChangeInput.bind(this)}
                         name="password"/>
                         </div>
                        
                         <div className="form-group"> 
                         <label for="role"> Role </label>
                         <select name="role" id="role" className="form-control"
                         onChange={this.onChangeInput.bind(this)}>
                                <option value="Admin">Admin</option>
                                <option value="Operator">Operator</option>
                                <option value="AccessUser">Access User</option>
                         </select>
                         </div>

                         <input type="button" value="Create User" class="btn btn-success" onClick={this.onClickSave.bind(this)} />
                        </form>
                 </div>
                 <div className="col-md-6 userform">
                 <p>  
                    <h2> <center> List of Users </center> </h2>
                    Following table displays the list of users. You can add Personal Information 
                    of user from here.
                    
                 </p>
                  <table className="table table-borderd table-striped">
                      <thead>
                          <tr>
                              <th>User Name</th>
                              <th>Email Id</th>
                              <th>Date</th>
                              <th>Personal Info</th>
                          </tr>
                      </thead>
                      <tbody>

                      {
                            //    this.state.Users.map((user, idx) => (
                            //    <TableRow 
                            //     key={idx}
                            //      row={user}
                            //      Users={this.state.Users}
                            //     // selected={this.getSelectedProduct.bind(this)}
                            //       />
                            //      ))
                             }
                      </tbody>
                  </table>
                 </div>
                </div>
            </div>  
                        </div>

                    </div>
                </div>
         );
    }
}
 


class TableRow extends Component{
    constructor(props){
        super(props);
    }

    // selected() is used to pass received data
//     onRowClick(){
//    this.props.selected(this.props.row);
// }     


    render(){
        return(
           <tr  onClick={this.onRowClick.bind(this)}>
               {
                   this.props.Users.length>0?
                   Object.keys(this.props.Users[0]).map((p, i) => (
                   <td> {this.props.row[p]}</td>
               ))
               :null
               }
               </tr>
       );
    }
}
export default CreatUser;
