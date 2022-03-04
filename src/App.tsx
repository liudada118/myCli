/** @format */

import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './page/home/index'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
