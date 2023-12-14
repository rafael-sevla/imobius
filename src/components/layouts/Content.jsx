import './Content.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../../views/Home'
import About from "../../views/About";
import Param from "../../views/Param";

const Content = props => (
    <main className="Content">
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/param/:id" element={<Param />} />
        </Routes>
    </main>
)

export default Content