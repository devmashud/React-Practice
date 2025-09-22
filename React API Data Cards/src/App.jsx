import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  
  const [Posts, setPosts] = useState([])

  const FetchPost = async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setPosts(data);
    console.log(data)

  }

  useEffect(() => {
  FetchPost();
  }, [])
  

  return (
    <>

    <Navbar/>
      <div className="container">

      {Posts.map((post)=>{
        return <div className="card">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <s>Userid : {post.userId}</s>
        </div>
      })}


      </div>
    </>
  )
}

export default App
