import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import Header from './components/sections/Header/Header'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
  <BrowserRouter>
    <Header />


    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>

  </StrictMode>,
)
