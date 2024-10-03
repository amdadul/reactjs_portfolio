import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Master from '../../public/Master'
import Contact from '../pages/Contact'
import Experiences from '../pages/Experiences'
import Home from '../pages/Home'
import Project from '../pages/Project'
import Projects from '../pages/Projects'
import Skills from '../pages/Skills'

const MainRouter = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Master><Home></Home></Master>}></Route>
                <Route path='/skills' element={<Master><Skills></Skills></Master>}></Route>
                <Route path='/projects' element={<Master><Projects></Projects></Master>}></Route>
                <Route path='/experiences' element={<Master><Experiences></Experiences></Master>}></Route>
                <Route path='/contact' element={<Master><Contact></Contact></Master>}></Route>
                <Route path='/project/:url' element={<Master><Project></Project></Master>}></Route>
                <Route path='*'></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default MainRouter