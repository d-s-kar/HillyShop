import React,{Component} from 'react';
import {Route,Redirect} from 'react-router-dom'
import Auth from './Auth.js'

class AuthRoute extends Component{

    render(){
       if( Auth.isLogin())
       {
           return <Route {...this.props}/>
       }
       else
       return <Redirect to="/Login"/>
    }
}
export default AuthRoute