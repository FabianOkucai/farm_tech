import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Academy from './pages/Academy'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Tools from './pages/Tools'

import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tools" element={<Tools />} />
      </Routes>
    </>
  )
}

export default App
