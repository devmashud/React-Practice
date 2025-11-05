import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Product from './component/Product'
import Cart from './component/Cart'

function App() {

  return (
    <>
     <Navbar/>

    <h2 className='text-2xl text-center font-bold m-2 '>Product</h2>
   <div className='flex justify-center gap-20 m-5 '>
      <Product name="Shoe" price={100} img="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"/>
     <Product name="T-Shirt" price={50} img="https://fabrilife.com/products/61507e01d69a1-square.jpg"/>
     <Product name="Watch" price={150} img="https://za.danielwellington.com/cdn/shop/files/731ffc3293c27cb7ae988a77f0db561c635e3b38_22eb9c2e-2be8-4dd6-84ec-caeb43a75099.png?v=1754849105&width=240" />
   </div>
    
    <Cart/>
   
    </>
  )
}

export default App
