import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Header from './components/sections/Header/Header'
import Footer from './components/sections/Footer/Footer'
import Subscribe from './components/sections/SubscribeNewsLetter/Subscribe'
import ContactUsPage from './pages/ContactUsPage'
import AboutUsPage from './pages/AboutUsPage'
import HomePage from './pages/HomePage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
  <BrowserRouter>
    <div className='wrapper'>

      <Header />
        
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ContactUsPage" element={<ContactUsPage/>} />
          <Route path="/AboutUsPage" element={<AboutUsPage/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Subscribe/>
      </main>

      <Footer/>

    </div>
  </BrowserRouter>

  </StrictMode>,
)
