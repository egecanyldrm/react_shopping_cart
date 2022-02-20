import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, incrementCount, removeFromCart } from '../Store/Actions';

const Cart = () => {

  const cartState = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [productCount, setProductCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  function getCount() {
    let counter = Number();
    cartState.forEach(product => {
      counter += product.count;
    })
    return counter
  }

  function getTotalPrice() {
    let totalPrice = Number();
    cartState.forEach(product => {
      totalPrice += product.count * product.price;
    })
    return totalPrice.toFixed(2);
  }

  getTotalPrice();

  useEffect(() => {
    setProductCount(getCount);
    setTotalPrice(getTotalPrice);
  }, [cartState,getCount,getTotalPrice])

  return (
    <div className="container mt-4" >
      <div className='d-flex justify-content-between' >
        <h4 >Subtotal ({productCount} items)  </h4>
        <h5>Total Price : { totalPrice } ₺</h5>
      </div>
      <div className=" bg-light border shadow-sm p-3 h-75 d-flex flex-wrap mt-4" >
        {cartState.map((product) => (
          <div className="card mb-3 ms-5 shadow" style={{ maxWidth: '580px' }} key={product.id} >
            <div className="row g-0">
              <div className="col-md-4">
                <img src={product.image} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title"> {product.name} </h5>
                  <p className="card-text"> {product.author} </p>
                  <p className="card-text"> {product.price} ₺ </p>
                  <div >
                    <span className='fw-bold'> There are {product.count} in total in your cart.  </span>
                    <div className="btn-group" role="group" aria-label="Basic example">
                      <button type="button" className={`btn btn${product.count < 2 ? '-secondary disabled' : '-outline-primary'}  `} onClick={() => { dispatch(incrementCount(product.id)) }}  >-</button>
                      <button type="button" className='btn btn-outline-danger' onClick={() => { dispatch(removeFromCart(product.id)) }}>Remove From Cart</button>
                      <button type="button" className="btn btn-outline-primary" onClick={() => { dispatch(addToCart(product)) }} >+</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}

      </div>

    </div >
  )
}

export default Cart