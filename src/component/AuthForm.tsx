import React, { Component } from "react";
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
    componentDidMount(){
        console.log(this.props);
    }
    handleChange = (e:any) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleSubmit = (e:any) => {
        
    }
    render(){
        const { email, firstName, lastName, password, mobile} = this.state;
        return(
            <div className="container">
                { this.props.type === "signin" &&
                <div className="form-container" >
                    <div className="title">
                        Login!
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
                        <button className="btn" type="submit">Login</button>
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
                    <div className="btn-container"><button className="btn">Sign Up</button></div>
                </div>
                }
            </div>
        )
    }
}

export default AuthForm;