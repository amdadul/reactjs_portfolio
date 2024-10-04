import React, { useContext, useEffect } from 'react'
import About from '../components/About'
import { TitleContext } from '../context/TitleProvider'
import Contact from './Contact'
import Experiences from './Experiences'
import Projects from './Projects'
import Skills from './Skills'

const Home = () => {
  const { setTitle } = useContext(TitleContext);
  useEffect(() => {
    setTitle(`Amdadul Hoque's Portfolio`)
  }, [setTitle]);
  
  return (
    <div>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Experiences></Experiences>
        <Contact></Contact>
    </div>
  )
}

export default Home