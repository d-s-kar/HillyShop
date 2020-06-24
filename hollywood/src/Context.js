import React, { Component } from 'react'
import { storeProducts,detailProduct } from './data'
import Axios from 'axios';
import { ThemeProvider } from 'styled-components';


const ProductContext = React.createContext();
class ProductProvider extends Component {
    constructor(props){
        super(props)
       this.state={
        products:storeProducts,
        detailProduct:detailProduct,
        cart:[],
        totalsum:0
    }
}
   getItem=(id)=>{
       const product=this.state.products.find(item=>item.id===id)
       return product

   }
    handleDetail=(id)=>{
        const product=this.getItem(id)
        this.setState(()=>{
            return { detailProduct:product}
        })
    }

    addToCart=(id)=>{
       let tempProducts=[...this.state.products];
       const index=tempProducts.indexOf(this.getItem(id));
       const product=tempProducts[index];
       product.inCart=true;
       product.count=1;
       const price=product.price;
       product.total=price;
       let cart2=[...this.state.cart];
       cart2.push(tempProducts[id-1]);
       console.log(tempProducts[id-1]);
       Axios.post(`http://localhost:8080/jpa/items/cart`,tempProducts[id-1])
       .then(response=>{
           console.log(response);
       })
        .catch(err=>{
        console.log(err)
       })
       
       this.setState(()=>
       {
           return {
               products:tempProducts,cart:cart2,product,totalsum:this.state.totalsum+price
           }
       },()=>console.log(this.state))
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart

            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer }