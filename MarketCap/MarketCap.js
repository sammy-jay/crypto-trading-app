import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import SideBar from '../../components/SideBar/SideBar'
const MarketCap = () => {
  return (
    <div className='app'>
        <SideBar/>
        <div className='dashboard'>
            <NavBar/>
        </div>
    </div>
  )
}

export default MarketCap