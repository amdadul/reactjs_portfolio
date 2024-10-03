import React from 'react'
import About from '../components/About'
import Contact from './Contact'
import Experiences from './Experiences'
import Projects from './Projects'
import Skills from './Skills'

const Home = () => {
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