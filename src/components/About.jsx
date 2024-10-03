import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <section className="bg-dark text-light text-center py-5">
        <div className="container">
            <h1 className="display-4">Hello, I'm a Software Developer</h1>
            <p className="lead">I specialize in building web applications that help businesses thrive.</p>
            <NavLink to="/contact" className="btn btn-primary">Hire Me</NavLink>
        </div>
    </section>
  )
}

export default About