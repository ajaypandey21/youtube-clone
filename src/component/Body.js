import { Outlet } from "react-router-dom"

import Sidebar from "./Sidebar"

function Body() {
 
 
  
  return (
    <div className="flex">
    <div className="w-1/7">
        <Sidebar />
    </div>
    <div className="w-6/7 ">
        <Outlet />
    </div>
</div>

  )
}

export default Body