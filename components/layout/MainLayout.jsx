import React from 'react'
import SideBar from './SideBar'
import DashNavBar from './DashNavBar'
import '@/app/globals.css'
const MainLayout = ({children}) => {
  return (
    <>
      <SideBar />
      <div className="pl-[280px] ">
        <DashNavBar />
        {children}
      </div>
    </>
  )
}

export default MainLayout