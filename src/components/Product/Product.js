import React from 'react'
import './Product.css'
export const Product = (props) => {
  const { product,addToCart } = props
  return (
    <div className="Single-product">
      <img src={product.img} alt="" />
      <p>{product.name}</p>
      <p>Price: ${product.price}</p>
      <div>
        <button onClick={()=>addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  )
}
