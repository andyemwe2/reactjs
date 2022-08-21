//parent component
import React from "react"

import MainLayouts from "./components/Layouts/main.layouts"
import Albums from "./components/Albums/main.albums"
import Posts from "./components/Posts/main.posts"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <MainLayouts>
        <Router>
          <Routes>
          <Route path="/" element={<h1>HOMEPAGE</h1>} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </Router>
      </MainLayouts>
    </>
  )
}

export default App
