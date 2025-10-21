import { useState, useMemo, useEffect } from 'react'
import './App.css'
// import { products } from './producs'
// import { products } from './producs';

  // let response = await fetch("https://dummyjson.com/products");
  //  var result = await response.json()
  // console.log(result)
function App() {
    let product = new Array(400).fill(0).map((_,i)=>{
      return{
        name: `product ${i}`,
        id : i
      }
   })
   
   const [search, setSearch] = useState("")
  const filterProduct = useMemo(() => {
    if (!search) return []; // 🔹
    return product.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);
 

  return (
  
    <>
      <input type="text"
      placeholder='Search Product'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />
          <ul>
        {filterProduct.map((p) => (
          <li key={p.id}>
            {p.name}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
