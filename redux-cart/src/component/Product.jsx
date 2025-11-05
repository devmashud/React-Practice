import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../feature/cart/cartSlice'


function Product({name, price, img}) {

  const dispatch = useDispatch()

  function handleClick (){
   dispatch(addToCart({name, price, img}))
  }

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={img}
      alt="Shoes"
      className="rounded-xl h-48 w-96 object-cover " />
  </figure>
  <div className="card-body items-center text-center w-full flex justify-center">
    <h2 className="card-title">{name}</h2>
    <div className="card-actions w-full flex items-center justify-around">
    <h5 className='text-[16px] font-bold'>${price}</h5>
    <div> <button onClick={() => handleClick()} className="btn btn-primary">Add to Cart</button> </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Product
