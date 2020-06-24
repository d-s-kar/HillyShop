import React from 'react'
import './Form.css'
import axios from 'axios'
class Register extends React.Component{


    state={
        name:'',
        mobile:'',
        email:'',
        password:''
    }
    handle=(event)=>{
        this.setState(
            {
                [event.target.name]:event.target.value
            }
        )
    }
    register=(e)=>{
        e.preventDefault();
        console.log(this.state);
        axios.post(`http://localhost:8080/jpa/users/hillyshop`,this.state)
        .then(response=>{
            console.log(response);
        })
        .catch(err=>{
            console.log(err)
        }).then(()=> this.props.history.push('/login'))
    }
    render(){
        return(
            <>
            <form className="f" style={{fontFamily:'Arial'}}>
            Full Name<input type="text" name="name" value={this.state.name} onChange={this.handle}/><br/>
             Mobile Number<input type="text" name="mobile" value={this.state.mobile} onChange={this.handle}/><br/>
              Your email Address<br/><input type="email" name="email" value={this.state.email} onChange={this.handle}/>
                 Password<br/><input type="password" name="password" value={this.state.password} onChange={this.handle}/>
                <div>
                    <br/>
                  <button type="submit" onClick={this.register}>Register</button>
                  </div>

            </form>
            </>
        )
    }
}
export default Register