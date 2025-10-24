import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Header from './components/sections/Header/Header'
import Footer from './components/sections/Footer/Footer'
import Subscribe from './components/sections/SubscribeNewsLetter/Subscribe'
import AboutUsPage from './pages/AboutUsPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
  <BrowserRouter>
    <div className='wrapper'>

      <Header />
        
      <main>
        <Routes>
          <Route path="/" element={<AboutUsPage/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Subscribe/>
      </main>

      <Footer/>

    </div>
  </BrowserRouter>

  </StrictMode>,
)
