import React, { Component } from 'react';

class CreatUser extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

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
                         <input type="text" class="form-control" id="userName"/>
                         </div>   
                        
                         <div className="form-group"> 
                         <label for="email"> Email </label>
                         <input type="email" class="form-control" id="email"/>
                         </div>

                         <div className="form-group"> 
                         <label for="password"> Password </label>
                         <input type="password" class="form-control" id="password"/>
                         </div>
                        
                         <div className="form-group"> 
                         <label for="role"> Role </label>
                         <select name="role" id="role" className="form-control">
                                <option value="Admin">Admin</option>
                                <option value="Operator">Operator</option>
                                <option value="AccessUser">Access User</option>
                         </select>
                         </div>

                         <input type="button" value="Create User" class="btn btn-success"/>
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
                          <tr>
                              <td> abc </td>
                              <td> abc@anc.cc</td>
                              <td>11/2/11</td>
                              <td><button className="btn btn-primary"> Add Info </button></td>
                          </tr>
                      </tbody>
                  </table>
                 </div>
                </div>
            </div>
         );
    }
}
 
export default CreatUser;
