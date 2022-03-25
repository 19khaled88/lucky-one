import React, { useEffect, useState } from 'react'
import { Product } from '../Product/Product'
import './Products.css'
export const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('accessories.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <div className="All-product">
      <div className="cart-view">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
      <div className="selected-items"></div>
    </div>
  )
}
