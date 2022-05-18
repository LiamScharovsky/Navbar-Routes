import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Home } from "./views/Home";
import { Profile } from "./views/Profile";
import { SignIn } from "./views/SignIn";
import { Contact } from "./views/Contact";
import { Explore } from "./views/Explore";
import { Shop } from "./views/Shop";
import { ShopCart } from "./views/ShopCart";

export const App = () =>{
  return (
    // These are needed to turn everthing into react 
    <>      
      <header>
        {/* Import from navbar.jsx */}
        <Navbar />
      </header>
      <main className="container mt-4">
        <Routes>
          <Route exact path ='/' element={ <Home /> } />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/users/explore' element={<Explore />} />
          <Route exact path='/users/signin' element={<SignIn />} />
          <Route exact path ='/users/profile' element={ <Profile /> } />
          <Route exact path='/shop' element={<Shop />} />
          <Route exact path='/shop/cart' element={<ShopCart />} />         
        </Routes>
      </main>
      <footer> </footer>
    </>
  )
}


// Only way to pass new data on javascript
// state = {postList : []}
// let newData = 1
// let postListCopy = postList
// postListCopy.push(newData)
// setPostList(postListCopy)


// // Make an API call to FLask server and retrieve a list of posts
// const[postList, setPostList] = useState([]);
// const retreivePosts = async () =>{
// //async request
// fetch('http://localhost:5000/api/v1/posts')
// .then (res => res.json())
// .then(data => console.log(data)) 
// }
// //UseEffect allows action when the page loads
// useEffect(()=>{
//   retreivePosts()
// }
// )