import React,{Component} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';
import AuthRoute from './Components/AuthRoute'
import Cart from './Components/Cart'
import Home from './Components/Home'
import Login from'./Components/Login'
import Details from './Components/Details'
import Default from'./Components/Default'
import Navbar from'./Components/Navbar.js'
import Register from './Components/Register'
import ProductList from './Components/ProductList'
import Address from './Components/Address'
class App extends Component {
  render(){
  return (  
    <>
    <Router>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/product" component={ProductList} />
        <Route path="/details" component={Details} />
          <AuthRoute path="/cart" component={Cart} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <AuthRoute path="/address" component={Address}/>
             <Route component={Default}/>
      </Switch>
      </Router>
     
   </>

        
   )
  }
}

export default App;
