import React, { useEffect, useState } from 'react'
import { Cart } from '../cart/Cart'
import { Product } from '../Product/Product'
import './Products.css'
export const Products = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [message, setMessage]= useState([])

  const addToCart = (product) => {
    const alteredCart = [...cart, product]
    const found = cart.find((element)=> element.id === product.id)

    if(found){
      const message = 'Item already added'
      setMessage(message)
    }else if(alteredCart.length > 4){
      const msg = 'Added items must not be more than 4'
      setMessage(msg)
    }else{
      setCart(alteredCart)
    }
  }

  const deleteOne=(id)=>{
    const filtered = cart.filter(filter=>{
      return filter.id !== id;
    })
   setCart(filtered)
  }
  
  
  useEffect(() => {
    fetch('accessories.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <div className="All-product">
      <div className="product-list">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-view">
        <Cart 
          cartItems={cart}
          message={message}
          deleteOne={deleteOne}
          ></Cart>
      </div>
    </div>
  )
}
