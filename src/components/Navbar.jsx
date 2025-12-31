import React from 'react'

const Navbar = () => {
  return (
  <>
  <nav className="flex justify-between bg-purple-500  py-2.5">
    <div className="logo">

    <span className='font-bold text-xl mx-6'>iTodo</span>
    </div>
    <ul className="flex gap-3 mx-3">
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Your Task</li>
        
    </ul>
  </nav>
  </>
  )
}

export default Navbar
