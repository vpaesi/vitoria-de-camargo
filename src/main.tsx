import './main.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/header.tsx';
import Footer from './components/footer/footer.tsx';
import Home from './pages/home/home.tsx';
import About from './pages/about/about.tsx';
import Resume from './pages/resume/resume.tsx';
import Portfolio from './pages/portfolio/portfolio.tsx';
import UserProvider from './components/userContextProps.tsx';
import Family from './pages/family/family.tsx';
import AboutPlus from './pages/about-plus/about-plus.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/about-plus' element={<AboutPlus />} />
          <Route path='/family' element={<Family />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </UserProvider>
  </StrictMode>
)
