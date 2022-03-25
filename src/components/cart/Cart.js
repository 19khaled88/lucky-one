import React from 'react'
import './Cart.css'
export const Cart = (props) => {
  const { cartItems } = props
  for (const cart of cartItems) {
    console.log(cart.id)
  }

  return (
    <div className="selected-items">
      <h3>Selected Items</h3>

      <div>
        <button>Choose 1 For Me</button>
        <button>Choose Again</button>
      </div>
    </div>
  )
}
