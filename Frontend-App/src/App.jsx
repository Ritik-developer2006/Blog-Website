import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="home" className="banner-layout">
        <div className="banner-overlay"></div>
        <div className="main-banner">
          <div className="banner-content relative flex flex-col justify-center items-center" style={{ height: "100vh" }}>
            <h1 className='text-6xl font-bold text-orange-400'><span className='text-6xl font-normal text-white'>Hello, I'm</span> Ritik Kumar</h1>
            <h2 className="type-line typing text-white text-3xl mt-5">
              I'm Professional
              <span className="type-wrap text-orange-400 ps-2">
                <span className="is-active">Ui/Ux Designer</span>
                <span>Web Developer</span>
                <span>Creative Director</span>
              </span>
            </h2>
            <div className='flex gap-5 mt-5'>
              <button type="button" class="group cursor-pointer relative flex py-2 items-center justify-center overflow-hidden rounded-md bg-orange-400 px-4 font-medium text-neutral-200">
                <span class='flex justify-center items-center'><i className="fa-solid fa-plus mr-1"></i><span class="hidden md:flex">New Blog</span></span>
                <div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div class="relative h-full w-8 bg-white/20"></div>
                </div>
              </button>
              <button type="button" class="group cursor-pointer relative inline-flex py-2 items-center justify-center overflow-hidden rounded-md px-4 bg-black font-medium text-neutral-200">
                <span class='flex justify-center items-center'><i class="fa-solid fa-list md:mr-3"></i><span class="hidden md:flex">All Blogs</span></span>
                <div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div class="relative h-full w-8 bg-white/20"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
