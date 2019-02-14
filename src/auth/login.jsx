import React, { Component } from 'react';
import LoginService from "./../service/loginservice.js";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id:0,
            userName:"",
            password:"",
            dateTime:""
         }
    
    
        this.serve =  new LoginService();
    }

    onClickSave(e){
        let userCrd = {
            id:this.state.id,
            userName:this.state.userName,
            password:this.state.password,
            dateTime:new Date()
        }

        this.serve.userAuthentication(userCrd)
        .then(resp=>resp.json())
        .then(resp=>{
            if(resp.status===200){
                console.log(resp);
                
                sessionStorage.setItem("token",resp.token);
                const h = this.props.history;
                //h.push('/dashboard')
            }
        })
        .catch(error=>console.log(error.status));
    }
    
    render() { 
        return ( 
            <div className="container">
                
                <div className="col-md-6 form">
                    <form>
                        <div className="form-group">
                            <label htmlFor="username"> User Name</label>
                            <input type="text" className="form-control" id="username" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" className="form-control" id="password" required/>
                        </div>
                        <div >
                        <button type="submit" className="btn btn-primary" onClick={this.onClickSave.bind(this)}>Login</button>
                        </div>
                    </form>

                </div>
            </div>

         );
    }
}
 
export default Login;