import React, { Component } from 'react'
import {ProductConsumer} from '../Context.js'
import { detailProduct } from '../data.js'
import {Cbbutton} from './B'
import {Link} from 'react-router-dom'
export class Details extends Component {
    render() {
        return (
            <ProductConsumer>
               {
                   x=>{
                    return (
                    <div className="Container py-5">
                        <div className="row">
                            <div className="">
                           <h1> { x.detailProduct.title }   </h1>
                            </div>
                        </div>
                            <div className="row">
                                <div className="my-3">
                                    <img src={x.detailProduct.img} className="image-fluid" alt="product"/>
                                 </div>
                                 <div>

                                     <h5>model:{ x.detailProduct.title}</h5>
                                    </div>  
                                    <div>
                                     {x.detailProduct.info}
                                    </div>
                                </div>
                                <Link to="/">
                                <button>back to products</button>
                                    </Link>
                                    
                        <button disabled={x.detailProduct.inCart?true:false} onClick={()=>{x.addToCart(x.detailProduct.id)}}>  {x.detailProduct.inCart?'in cart':'Add to cart'}</button>
                    </div>
                    )
                   }
               }
            </ProductConsumer>
        )
    }
}

export default Details
