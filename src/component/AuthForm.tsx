import { type } from "os";
import React, { Component } from "react";

class AuthForm extends Component<any, any> {
    constructor(props:any){
        super(props);
        this.state = {
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            mobile:""
        }
    }
    componentDidMount(){
        console.log(this.props);
    }
    render(){
        const { email, firstName, lastName, password, mobile} = this.state;
        return(
            <div className="container">
                <div className="form-container">
                    <div className="input-group"><input type="text" value={firstName} /></div>
                    <input type="text" value={lastName} />
                    <input type="text" value={email} />
                    <input type="password" value={password} />
                    <input type="text" value={mobile} />
                </div>
            </div>
        )
    }
}

export default AuthForm;