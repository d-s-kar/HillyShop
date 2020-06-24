import axios from'axios'
import React from 'react'
import Login from './Login'
import {Link} from 'react-router-dom'
import { Redirect } from 'react-router-dom'
class Auth{


    register(email,password){
        sessionStorage.setItem('authuser',email)
       
    }
    isLogin(){
        let user=sessionStorage.getItem('authuser');  
        if(user==null)
        return false;
        return true; 
     }
    logOut(email,password){
        sessionStorage.removeItem('authuser',email)
    }
    getUser(){
        let user=sessionStorage.getItem('authuser');  
        if(user==null)
        return ''
        return user;
    }
}
export default new Auth()