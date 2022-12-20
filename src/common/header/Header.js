import React from 'react'
import Head from './Head'
import './Header.css'
import Navbar from './Navbar'
import Search from './Search'
const Header = () => {
  return (
    <>
      <Head/>
      <Navbar/>
      <Search/>
    </>
  )
}

export default Header
