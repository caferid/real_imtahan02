import React from 'react'
import './index.scss'
import Footer from '../footer'
import Navbar from '../navabar'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default MainLayout