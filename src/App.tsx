import HomePage from "./components/HomePage.tsx";
import Footer from "./components/Footer.tsx";
import ContactUs from "./components/ContactUs.tsx";

import { BrowserRouter, Routes, Route } from 'react-router-dom';



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import 'swiper/css/scrollbar';

import Modal from 'react-modal';
import Services from "./components/Services.tsx";
import Header from "./components/Header.tsx";

import CookieConsent from "react-cookie-consent";


(window as any).global = window;
Modal.setAppElement('#root');

function App() {


  return (


    <BrowserRouter>

      <CookieConsent location="bottom"
        buttonText="Aceitar Todos Os Cookies"
        cookieName="myAwesomeCookieName2"
        style={{ background: '#0A1B2D', width: "25rem", height: "17.5rem", borderRadius: "8px", marginLeft: "1rem", paddingTop: '.7rem',marginBottom:'1rem' }}
        buttonStyle={{ background: ' #E6D35B',fontWeight: 'bold'}}
        enableDeclineButton
        declineButtonText="Rejeitar Todos"
        declineButtonStyle={{ background: ' #E6D35B',fontWeight: 'bold', color: "#050505" }}
      >Ao clicar em "Aceitar todos os cookies", concorda com o armazenamento de cookies no seu dispositivo para melhorar a navegação no site, analisar a utilização do site e ajudar nas nossas iniciativas de marketing. <a href="/faleconosco" style={{display:'flex',marginRight:"7rem",marginTop:'1rem',color:' #E6D35B',opacity:'0.7',cursor:'pointer'}}>Veja Nossas Definiçôes de Cookies</a>
      </CookieConsent>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faleconosco" element={<ContactUs />} />
        <Route path="/servicos" element={<Services />} />




      </Routes>
      <Footer />

    </BrowserRouter>
  )
}

export default App
