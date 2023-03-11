import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './components/SideBar'
import styled from 'styled-components'
import Content from './components/Context'
import BottomNav from './components/BottomNav'
import MobileCateogry from './components/MobileCateogry'
import SingleVideoPage from './components/SingleVideoPage'
import Navbara from './components/NavBar'
import UserDetails from './components/UserDetails'
import SingleChannel from './components/SingleChannel'
import Searchpage from './components/Searchpage'

function App() {

  return (
    <>
      <Navbara />
      <WholeHome>
        <SideBar />



        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Searchpage />} />
          <Route path='/type/:type' element={<Content />} />
          <Route path='/channel/:channelID' element={<SingleChannel />} />
          <Route path='/mobile/category/type/:type' element={<Content />} />
          <Route path='/mobile/category' element={<MobileCateogry />} />
          <Route path='/user-details' element={<UserDetails />} />
          <Route path='/single-video-page/video/:videoID' element={<SingleVideoPage />} />
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