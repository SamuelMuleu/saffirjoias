import  HomePage  from "./components/HomePage.tsx";
import Footer from "./components/Footer.tsx";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import 'swiper/css/scrollbar';

import Modal from 'react-modal';

(window as any).global = window;
Modal.setAppElement('#root');
function App() {
  

  return (
  <BrowserRouter>
      <Routes>

      <Route path="/" element={<HomePage />} />



 
      </Routes>
      <Footer />
   
      </BrowserRouter>
  )
}

export default App
