import  HomePage  from "./components/HomePage.tsx";
import Footer from "./components/Footer.tsx";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import 'swiper/css/scrollbar';


(window as any).global = window;
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
