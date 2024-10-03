import React from 'react'
import Footer from '../src/components/Footer'
import NavBar from '../src/components/NavBar'

const Master = ({children}) => {
  return (
    <div>
    <NavBar></NavBar>
    {children}
    <Footer></Footer>
    </div>
  )
}

export default Master