import { useState } from 'react'
import './assets/scss/main.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layout/mainlayout'
import Home from './pages/home'
import Add from './pages/add'
import Detail from './pages/detail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes >
      <Route element={<MainLayout></MainLayout>} path='/'>
        <Route element={<Home/>} path='/'></Route>
        <Route element={<Add/>} path='/add'></Route>
        <Route element={<Detail></Detail>} path='/detail/:id'></Route>
      </Route>

    </Routes>
    </BrowserRouter>
  )
}

export default App
