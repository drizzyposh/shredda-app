import React from 'react'
import Navbar from '../components/navbar/Navbar'
import '../pages/Home.scss'
import Sidebar from '../components/sidebar/Sidebar'
import Feed from '../components/feed/Feed'
import Rightbar from '../components/rightbar/Rightbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="homecontainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  )
}

export default Home
