import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import Header from './components/sections/Header/Header'
import Footer from './components/sections/Footer/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
  <BrowserRouter>
    <div className='wrapper'>

      <Header />
        
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer/>

    </div>
  </BrowserRouter>

  </StrictMode>,
)
