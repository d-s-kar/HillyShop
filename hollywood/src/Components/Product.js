import React, { Component } from 'react'
import styled from 'styled-components'
import { ProductConsumer } from '../Context'
import { Link } from 'react-router-dom'
export default class Product extends Component {

    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                        {
                            value=>(
                                <div className="img-container p-5" onClick={() => value.handleDetail(id)}>
                                <Link to="/details">
                                    <img src={img} alt="product" className="card-img-top" />
                                </Link>
                                <button className="cart-btn" disabled={inCart ? true : false} onClick={() => value.addToCart(id)}>
                               {
                                   inCart ? (<p className="text-capatalize mb-0" disabled>
                                       {" "}
                                       inCart
                                   </p>):
                                   (<i className=
                                    "fas fa-cart-plus"/>)
        
                               }
                                </button>
                            </div>
                            )
                        }
                   
                    </ProductConsumer>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}

                        </p>
                        <h5 className="text-blue font-italic">
                            <span className="mr-1">@</span>
                            {price}
                        </h5>
                    </div>
                </div>

            </ProductWrapper>
        )
    }
}
const ProductWrapper = styled.div`
.card{
    border-color:transparent;
    transition:all 1s linear;
    background:pink;
}
.card-footer{
    background:skyblue;
    border-top:transparent;
    transition:all 1s linear;
}
`
