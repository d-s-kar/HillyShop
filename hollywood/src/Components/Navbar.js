import React, { Component } from 'react'
import{Link} from 'react-router-dom';
import logo from '../log.png';
import styled from'styled-components'
import {Cbbutton} from './B'
import './button.css'
import { withRouter } from 'react-router';
import Auth from './Auth.js'
export class Navbar extends Component {
   
    render() {
        return (
            <NavCustom className="navbar navbar-expand-sm navbar-dark " >
               <Link to="/">
                   <img src={logo} alt="store" className="navbar-brand"/>
                   hillyshop.com*
                    </Link>
                   <ul className="navbar-nav mr-auto" >
                   <Link to="/product" className="nav-link">
                    Product
                    </Link>
                    <Link to="/product" className="nav-link">
                   Trending
                    </Link>
                    <Link to="/product" className="nav-link">
                   Popular
                    </Link>
                    <Link to="/product" className="nav-link">
                   New
                    </Link>
                   </ul>
                   <ul>
                       <div className="input-group">
                    <input type="text" name="search" placeholder="Search" className="form-control"/>
                    <div className="input-group-append">
                     <button type="submit">
                         <i className="fas fa-search"/>
                     </button>
                     </div>
                     </div>
                    </ul>
                    <ul>
                  <Link to="/cart" className="navbar-brand pull-right">
                
                      <Cbbutton>
                          <i className="fas fa-cart-plus"/>
                          my cart
                          </Cbbutton>
                          </Link>
                          
                   </ul>   
                
                <div className="dropdown">

          {!Auth.isLogin() && <button className="dropbtn">Sign in
         
      <i className="fa fa-caret-down"></i>
    </button>}
    
    <div className="dropdown-content">
      <a href="/login">Login</a>
     <a href="/register">Register</a>
      
    </div>
  
        </div> 

      
  <div>
  
    {Auth.isLogin() && <span style={{color: "white"}}>welcome {Auth.getUser()}</span>}
      
     <br/>
     <Link to='/Login'>
    {Auth.isLogin() && <button onClick={Auth.logOut}> Logout</button>}
    </Link>
    </div>
               </NavCustom>
        )
    }
}

export default withRouter(Navbar)

const NavCustom=styled.nav`
background:purple;
.nav-link{
    color:white !important;
    font-size:1.1rem;

}

`
