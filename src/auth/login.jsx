import React, { Component } from 'react';
import LoginService from "./../service/loginservice.js";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            //id:0,
            userName:"",
            password:"",
            //dateTime:""
         }
    
    
        this.serve =  new LoginService();
    }

    onChangeUserName(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onChangePassword(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onClickSave(e){
         
         
        let userCrd = {
            //id:this.state.id,
            userName:this.state.userName,
            password:this.state.password,
            //dateTime:new Date()
        }

        this.serve.userAuthentication(userCrd)
        .then(resp=>resp.json())
        .then(resp=>{
            if(resp.status===200){
                console.log("dfsaffasf :  ", resp);
                sessionStorage.setItem("token",resp.token);
                this.props.history.push('/dashboard')
            }
        })
        .catch(error=>console.log(error.status));
    }
    
    render() { 
        return ( 
            <div className="container">
                
                <div className="col-md-6 form">
                        <div className="form-group">
                            <label htmlFor="userName"> User Name</label>
                            <input type="text" className="form-control" id="userName"
                            onChange={this.onChangeUserName.bind(this)}
                            name="userName"
                            
                            required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" className="form-control" id="password"
                            onChange={this.onChangePassword.bind(this)}
                            name="password"
                            
                            required/>
                        </div>
                        <div >
                        <button type="submit" className="btn btn-primary" onClick={this.onClickSave.bind(this)}>Login</button>
                        </div>
                </div>
            </div>

         );
    }
}
 
export default Login;