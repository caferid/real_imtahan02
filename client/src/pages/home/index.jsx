import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './index.scss'
import Slide from '../../componet/slider'
import { Link } from 'react-router-dom'



function Home() {
  const [product, setProduct] = useState([])

  const axiosData = async () => {
    const response = await axios.get('http://localhost:3000/')
    const data = response.data.data
    setProduct(data)

  }

  useEffect(() => {
    axiosData()
  }, [])


  return (
    <>
      <div id='sildeee'>
        <Slide></Slide>
      </div>
      {product && product.map((item) => (
        <ul key={item._id}>
          <li >{item.name}</li>
          <li> <img src={item.info} alt="" /></li>
          <Link to={`detail/${item._id}`}>Ferid</Link>
        </ul>
      ))}

    </>


  )
}

export default Home 