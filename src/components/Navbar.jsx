import React from 'react'
import { NavList } from './NavList'
import NavButtons from './NavButtons'

const Navbar = () => {
  return (
	<div className='flex justify-around w-full p-[16px] '>
		<div>Logo</div>
		<NavList/>
		<NavButtons/>
	</div>
  )
}

export default Navbar
