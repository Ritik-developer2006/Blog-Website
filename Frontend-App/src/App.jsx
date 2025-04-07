import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import Home from "./Home.jsx"
import Blog from "./Blogs.jsx"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blogs" element={<Blog />}></Route>
      </Routes>
    </>
  );
}

export default App
