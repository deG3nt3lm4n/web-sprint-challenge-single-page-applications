import React from 'react'

function OrderConfirm({order}) {
  console.log(order)
  const newOrder = order[0]
  console.log(newOrder)

  // const orderMeBB = (arr) => {
  //   console.log(arr)
  //   arr.map(top => <li>{top}</li>)
  // }


  return (
    <div>
      <h1>Order confirmed</h1>
      <div>
        <p>Order: {Math.floor(Math.random() * 100000)}</p>
        <p>Name: {newOrder.name}</p>
        <p>Size: {newOrder.size}</p>
        <p>Toppings:</p>
        <ul>
          {
            newOrder.topping ? newOrder.topping.map(top => <li>{top}</li>) : 'no topping'
          }
        </ul>
        <p>Message: {newOrder.specialInstructions}</p>
      </div>
    </div>
  )
}

export default OrderConfirm
