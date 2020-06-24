import React, { Component } from 'react'
import Title from './Title'
import Product from './Product'
import { ProductConsumer } from '../Context'
export class ProductList extends Component {
    render() {
        return (
            <>
                <Title name="Our" title="Products" />
                <div className="py-5">
                    <div className="container">
                        <div className="row" />
                        <ProductConsumer>
                            {value => {
                             return value.products.map(product=>{
                                return <Product key={product.id} product={product}/>
                             })     
                                    }}
                        </ProductConsumer>
                    </div>
                </div>

            </>
        )
    }
}
export default ProductList