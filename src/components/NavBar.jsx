import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Amdadul Hoque's Portfolio</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink className={({isActive, isPending})=> 'nav-link' + (isActive ? ' active':'')} to="/">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive, isPending})=> 'nav-link' + (isActive ? ' active':'')} to="/skills">Skills</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive, isPending})=> 'nav-link' + (isActive ? ' active':'')} to="/projects">Projects</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive, isPending})=> 'nav-link' + (isActive ? ' active':'')} to="/experiences">Experience</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive, isPending})=> 'nav-link' + (isActive ? ' active':'')} to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar