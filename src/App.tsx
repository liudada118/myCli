/** @format */

import React from 'react'
import {BrowserRouter, Routes, Route, Link , HashRouter} from 'react-router-dom'
import Bed from './page/home/Bed'
import Demo from './page/home/Demo'
import Col from './page/col/Bed'
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Bed />} />
        <Route path="/col" element={<Col />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </HashRouter>
  )
}
