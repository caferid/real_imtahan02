import React, { useEffect, useState } from 'react'
import './index.scss'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Detail() {

  const [product, setProduct] = useState([])
  const {id}=useParams()
  const axiosData = async () => {
    const response = await axios.get(`http://localhost:3000/${id}`)
    const data = response.data.data
    
    setProduct(data)

  }

  useEffect(() => {
    axiosData()
  }, [])
  return (
    <div>
      <img src={product && product.info} alt="" />
      
    </div>
  )
}

export default Detail