import React from 'react'
import { useSelector } from 'react-redux'

function Sidebar() {
    const isMenuOpen = useSelector(store=>store.nav.isMenuOpen)
    if (!isMenuOpen) return null;
  return (
    <div className='p-2 shadow-lg w-48 '>
        <ul>
            <li>Home</li>
            <li>Shorts</li>
            <li>Subscription</li>
        </ul>
            <h1 className='font-bold pt-2'>You</h1>
        <ul>
            <li>Your Channel</li>
            <li>History</li>
            <li>Your Videos</li>
        </ul>
        <h1 className='font-bold pt-2'>Subscription</h1>
        <ul>
            <li>Subscription 1</li>
            <li>Subscription 2</li>
            <li>Subscription 3</li>
            <li>Subscription 4</li>
            
        </ul>
    </div>
  ) 
}

export default Sidebar