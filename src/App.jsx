import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import Home from './pages/Home'
import Disfraces from './pages/Disfraces'
import Ceramica from './pages/Ceramica'
import Extras from './pages/Extras'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/disfraces" element={<Disfraces />} />
            <Route path="/ceramica" element={<Ceramica />} />
            <Route path="/extras" element={<Extras />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </BrowserRouter>
  )
}
