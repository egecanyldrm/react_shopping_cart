import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../Store/Actions';

const HomePage = () => {

  const state = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className='d-flex '>
      <div className="bg-light p-5 w-75 m-auto mt-5 shadow ">
        <div className="row justify-content-start">
          {state.products.map(product => (
            <div key={product.id} className="card col-lg-3 col-md-5  col-sm-2 m-4 p-0 text-center" >
              <img src={product.image} className='card-img-top' style={{ 'maxHeight': '20rem' }} alt="product_img" />
              <div className="card-body">
                <h5 className='card-title w'>{product.name}</h5>
                <p className="card-text">{product.author}</p>
                <p className="card-text">{product.price} ₺</p>
                <button className=" btn btn-primary" onClick={() => { dispatch(addToCart(product)) }} > Add To Cart</button>
              </div>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default HomePage