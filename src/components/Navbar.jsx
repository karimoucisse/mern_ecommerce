import React from 'react'
import { NavList } from './NavList'

const Navbar = () => {
  return (
	<div className='flex justify-around w-full p-[16px] '>
		<div>Logo</div>
		<NavList/>
		<div>Left</div>
	</div>
  )
}

export default Navbar
