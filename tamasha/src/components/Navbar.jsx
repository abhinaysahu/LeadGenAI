import React from 'react'
import { FaBell,FaSearch,FaUserCircle } from "react-icons/fa";
function Navbar() {
  return (
    <>
       <nav className="flex items-center justify-between px-6 py-4 bg-white w-full text-black">
      
            {/* Search Input */}
            <div className="flex items-center bg-gray-100 text-gray-800 rounded-lg px-3 py-2">
              <FaSearch className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search..."
                className="outline-none border-none text-sm w-64"
              />
            </div>
      
            {/* Icons */}
            <div className="flex items-center gap-6 text-xl">
              <FaBell className="cursor-pointer hover:text-gray-400" title="Notifications" />
              <FaUserCircle className="cursor-pointer hover:text-gray-400" title="Profile" />
            </div>
          </nav>
          </>
  )
}

export default Navbar
