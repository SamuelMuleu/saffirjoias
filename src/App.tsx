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
import Services from "./components/AboutUs.tsx";
import Header from "./components/Header.tsx";
import Cookies from "./components/Cookies.tsx";



(window as any).global = window;
Modal.setAppElement('#root');

function App() {


  return (

    <BrowserRouter>
      <Cookies />


      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faleconosco" element={<ContactUs />} />
        <Route path="/sobrenos" element={<Services />} />



      </Routes>
      <Footer />

    </BrowserRouter>
  )
}

export default App
