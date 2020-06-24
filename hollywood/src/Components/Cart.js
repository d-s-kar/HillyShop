import React, { Component } from 'react'
import { ProductConsumer } from '../Context'
import { Redirect } from 'react-router-dom'

export class Cart extends Component {
    state={
        arr:[],
        sum:0
    }
    buy=()=>{
        
       this.props.history.push('/address')
    }
    render() {
        return (
            <>
           <ProductConsumer>
             {

                 value=>{
                       
                     console.log(value.cart);
                     console.log(value.totalsum);
                   this.state.sum=value.totalsum;
                    return  <>
                    {value.cart.map(items=>{
                        return <div key={items.id}>
                           <div style={{textAlign:"center"}}>{items.title} ={items.price}</div>
                            
                            </div>
                    })
                    }
                    <div style={{textAlign:"center"}}>{this.state.sum}</div>
                   
                    </>
                  
                 }
                } 
                  
               </ProductConsumer>
               <div style={{textAlign:"center"}}><button onClick={this.buy}>Buy now</button></div>
              </>
            
        )
    }
}

export default Cart
