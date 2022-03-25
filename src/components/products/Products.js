import React, { useEffect, useState } from 'react'
import { Cart } from '../cart/Cart'
import { Product } from '../Product/Product'
import './Products.css'
export const Products = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const addToCart = (product) => {
    const alteredCart = [...cart, product]
    setCart(alteredCart)
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
        <Cart cartItems={cart}></Cart>
      </div>
    </div>
  )
}
