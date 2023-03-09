import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import { useGlobalContext } from './contexts/globalContext'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './components/SideBar'
import styled from 'styled-components'
import Content from './components/Context'
import BottomNav from './components/BottomNav'
import MobileCateogry from './components/MobileCateogry'

function App() {

  return (
    <>
      <NavBar />
      <WholeHome>
        <SideBar />



        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/type/:type' element={<Content />} />
          <Route path='/mobile/category/type/:type' element={<Content />} />
          <Route path='/mobile/category' element={<MobileCateogry />} />
        </Routes>
      </WholeHome>
      <BottomNav />


    </>

  )
}
const WholeHome = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 200px auto;
    z-index: -9;
    @media screen and (max-width: 587px) {
        grid-template-columns: auto;
    }



`
export default App