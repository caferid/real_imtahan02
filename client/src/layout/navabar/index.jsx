import React, { useState } from 'react'
import './index.scss'
import { Link, NavLink } from 'react-router-dom'


function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  console.log(isOpen);
  return (
    <>
      <div id='navbar_desktop'>
        <div className="container">

          <div className="title">
            Flour Studio
          </div>
          <div className="links">
            <NavLink to={'/'}> Home</NavLink>
            <Link>About</Link>
            <Link>Portfolio</Link>
            <Link>Pricing</Link>
            <Link>Contact</Link>
            <NavLink to={'/add'}> Add</NavLink>
          </div>
        </div>
      </div>
      <div id='navbar_mobil'>
        <div className="container">
          <div className="up">
            <div className="title">
              Flour Studio
            </div>
            <div className="hamburger">
              <div onClick={() => setIsOpen(!isOpen)}>
                <i className={!isOpen ? 'fa-solid fa-bars' : 'fa-solid fa-xmark'}></i>
              </div>
            </div>
          </div>
          {<div className={isOpen ? "down" : "deactive"}>
            <div className="links">
              <NavLink to={'/'}> Home</NavLink>
              <Link>About</Link>
              <Link>Portfolio</Link>
              <Link>Pricing</Link>
              <Link>Contact</Link>
              <NavLink to={'/add'}> Add</NavLink>
            </div>
          </div>}

        </div>
      </div>
    </>

  )
}

export default Navbar