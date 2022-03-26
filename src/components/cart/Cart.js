import React, { useEffect, useState } from 'react'
import './Cart.css'
export const Cart = (props) => {
  const { cartItems, message, deleteOne } = props
  const [cartItem, setCartItem] = useState([])
  const [randomItem, setRandomItem] = useState([])
  const [randomOne, setRandomOne] = useState([])
  useEffect(() => {
    const cartAdded = [cartItems]
    setCartItem(cartAdded)
    cartItem.map((ran) => setRandomItem(ran))
  }, [cartItems])

  const randomSelect = () => {
    let show = randomItem[Math.floor(Math.random() * randomItem.length)]
    setRandomOne(show.name)
  }

  return (
    <div className="selected-items">
      <div className="warning-messge">
        <h3>Selected Items</h3>
        <div className="random">
          <p>Randomly chosen area</p>
          <p>{randomOne}</p>
        </div>
        <p>{message}</p>
        <hr />
      </div>

      {cartItem.map((prod) =>
        prod.map((p) => (
          <div className="addedItemsDelete">
            <p key={p.id}>{p.name}</p>
            <button onClick={() => deleteOne(p.id)}>Delete</button>
          </div>
        )),
      )}
      <div className="chooseMultiple">
        <button onClick={randomSelect}>Choose 1 For Me</button>
        <button>Choose Again</button>
      </div>
    </div>
  )
}
