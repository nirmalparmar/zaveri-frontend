import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import HomePage from './HomePage';
import './main.css'
import AuthForm from '../component/AuthForm';


const Main = (props:any) => {
    return(
        <div className="main-container">
            <Switch>
                <Route exact path="/" render={props => <HomePage {...props} />} />
                <Route exact path="/signin" render={props => {
                    return(
                        <AuthForm signin={true} signup={false} {...props} />
                    )
                }} />
                <Route exact path="/signup" render={props => {
                    return(
                        <AuthForm signin={false} signup={true} {...props} />
                    )
                }} />
            </Switch>
        </div>
    )
};

function mapStateToProps(state:any){
    return{
        currentUser:state.currentUser
    }
}


export default withRouter(connect(mapStateToProps, null)(Main))