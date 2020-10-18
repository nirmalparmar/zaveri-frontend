import React, { Component } from "react";
import { baseUrl } from "../service/api";
import './authform.css';
import Modal from "./Modal/Modal";

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

    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    notEmptyRx = /(?!^$)([^\s])/;

    validateFields(){
        let isValid = true;
        if(this.props.type == 'signin'){
            isValid = isValid && this.emailRegex.test(this.state.email);
            isValid = isValid && this.notEmptyRx.test(this.state.password);
            return isValid;
        }else if (this.props.type == 'signup'){
            isValid = isValid && this.emailRegex.test(this.state.email);
            isValid = isValid && this.notEmptyRx.test(this.state.password);
            isValid = isValid && this.notEmptyRx.test(this.state.firstName);
            isValid = isValid && this.notEmptyRx.test(this.state.lastName);
            isValid = isValid && this.notEmptyRx.test(this.state.mobile);
            return isValid;
        }
        return false;
    }

    componentDidMount(){
        console.log(this.props);
    }
    handleChange = (e:any) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleSubmit = (e:any) => {
        e.preventDefault();
        if(this.validateFields()){
            this.props.onAuth(this.props.type, this.state).then((res:any) => {
                console.log("success");
            });
        }
        
    }
    render(){
        const { email, firstName, lastName, password, mobile} = this.state;
        return(
            <div className="container">
                { this.props.type === "signin" &&
                <div className="form-container" >
                    <div className="title">
                        Log in
                    </div>
                    <div className="input-group">
                        <div className="input-label">Email</div>
                        <input className="input-lg" type="text" name="email" value={email} onChange={this.handleChange}/>
                    </div>
                    <div className="input-group">
                        <div className="input-label">Password</div>
                        <input className="input-lg" type="password" name="password" value={password} onChange={this.handleChange}/>
                    </div>
                    <div className="btn-container">
                        <button className="btn" onClick={this.handleSubmit}>Login</button>
                    </div>
                    <div><a className="link" href="/signup">Create Account</a></div>
                </div>
                }
                { this.props.type === "signup" &&
                <div className="form-container">
                    <div className="title">
                        Join Now
                    </div>
                    <div className="input-group">
                        <div className="input-label">First Name</div>
                        <input className="input-lg" type="text" name="firstName" value={firstName} onChange={this.handleChange} />
                    </div>
                    <div className="input-group">
                        <div className="input-label">Last Name</div>
                        <input className="input-lg" type="text" name="lastName" value={lastName} onChange={this.handleChange}/>
                    </div>
                    <div className="input-group">
                        <div className="input-label">Email</div>
                        <input className="input-lg" type="text" name="email" value={email} onChange={this.handleChange}/>
                    </div>
                    <div className="input-group">
                        <div className="input-label">Password</div>
                        <input className="input-lg" type="password" name="password" value={password} onChange={this.handleChange}/>
                    </div>
                    <div className="input-group">
                        <div className="input-label">Mobile</div>
                        <input className="input-lg" minLength={10} type="number" name="mobile" value={mobile} onChange={this.handleChange}/>
                    </div>
                    <div className="btn-container"><button className="btn" onClick={this.handleSubmit}>Sign Up</button></div>
                </div>
                }
            </div>
        )
    }
}

export default AuthForm;