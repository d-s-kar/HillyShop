import React from'react'
import './Form.css'
import ProductList from './ProductList'
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Auth from './Auth'
class Login extends React.Component{
     constructor(){
         super();
    this.state=
    {
        email:'hillyshop@gmail.com',
        password:'123',
        invalid:false,
        success:false,

    }
}

    handle=(event)=>{
      
       this.setState({
           [event.target.name]:event.target.value,
       })
    }
 entershop=(e)=>{
     e.preventDefault();
     axios.get(`http://localhost:8080/jpa/users/${this.state.email}/and/${this.state.password}`)
        .then(response=>{
            console.log(response.data);
            if(response.data.password===this.state.password)
            {
                Auth.register(response.data.name,response.data.password)
              this.setState({
                  success:true,
                  invalid:false
              })
              

             
            }
            else
            this.setState({
                success:false,
                invalid:true
            })
            
            
        })
        .catch(err=>{
            console.log(err)
        })
    
    //  if(this.state.email==='hillyshop@gmail.com' && this.state.password==='abc')
    //  {
    //  this.setState({
    //      success:true,
    //      invalid:false

    //  })
    // }
    //  else
    //  {
    //     this.setState({
    //         invalid:true,
    //         success:false
   
    //     })
    //  }
     
 }

 reg=()=>{
    this.props.history.push('/register')
 }
    render(){
      
        
        return(
            <>
            <form className="f">
               
               Email or Mobile Number <input type="text" name="email" value={this.state.email} onChange={this.handle}/>
               Password<input type="password" name="password" value={this.state.password} onChange={this.handle} />
               <div className="sub">
               <button type="submit" onClick={this.entershop}>Enter Shop</button>
               {this.state.invalid && <span style={{color:'red'}}>Invalid Credentials</span>}
               {this.state.success && <Redirect to='/'/>}
               </div>
               <i>By Clicking Enter Shop you agree to hillshop rules</i>
                 <br/>
                 <br/>
               <div>
                   <h5>New to hillyshop?</h5>
                 <button onClick={this.reg}>Create Account</button>
               </div>
                </form>
            </>
        )
    }
}
export default Login