import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hello from './pages/Hello'
import Bye from './pages/Bye'
import Work from './pages/Work'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/first" element={<Hello />} />
          <Route path="/second" element={<Work />} />
          <Route path="/third" element={<Bye />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
