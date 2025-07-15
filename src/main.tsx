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
import Contact from './pages/contact/contact.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </UserProvider>
  </StrictMode>
)
