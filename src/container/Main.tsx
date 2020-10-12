import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import HomePage from './HomePage';
import './main.css'
import AuthForm from '../component/AuthForm';


const Main = (props:any) => {
    return(
        <div className="main-container">
            <div className="component">
                <Switch>
                    <Route exact path="/" render={props => <HomePage {...props} />} />
                    <Route exact path="/signin" render={props => {
                        return(
                            <AuthForm type="signin" {...props} />
                        )
                    }} />
                    <Route exact path="/signup" render={props => {
                        return(
                            <AuthForm type="signup" {...props} />
                        )
                    }} />
                </Switch>
            </div>
        </div>
    )
};

function mapStateToProps(state:any){
    return{
        currentUser:state.currentUser
    }
}


export default withRouter(connect(mapStateToProps, null)(Main))