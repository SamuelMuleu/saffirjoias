import Header from "./Header.tsx"

import { Swiper, SwiperSlide } from 'swiper/react';

import { allianceCards, imageCarousel, brincoCard, aneisCard, colarCard, pingenteCard, escapularioCard } from "../data/CardData.tsx";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import 'swiper/css/scrollbar';
import Category from "./Category.tsx";

import ContactUs from "./ContactUs.tsx";
import Services from "./Services.tsx";
import { v4 as uuidv4 } from 'uuid';

import cristo from "../assets/cristo.png";
import canga from "../assets/canga.png";
import trevo from "../assets/trevo.png";


import escapulario from "../assets/escapulario.png";

import brinco from "../assets/brinco.png";


import alianca from "../assets/aliança.png";

import styles from "./HomePage.module.css"
import { useEffect, useState } from "react";
import Cards from "./Card.tsx";

interface CustomImage {
  id: string;
  url: string;
  alt: string;
  text: string;
  component: () => JSX.Element;
}


function HomePage() {
  const [showWhatsapp, setShowWhatsapp] = useState(false);
  const [showService, setShowService] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState<JSX.Element | null>(null);
  const [clickedImage, setClickedImage] = useState<CustomImage | null>(null);
  const [showCard, setShowCard] = useState(true);



  useEffect(() => {
    if (clickedImage) {

      setSelectedComponent(clickedImage.component);
    }
  }, [clickedImage]);




  const handleClickContact = () => {


    setShowWhatsapp(true)
    setShowService(false);


  }

  const handleBack = () => {



    setShowWhatsapp(false)
    setShowService(false);



  }

  const handleBackCard = () => {


    setShowCard(true)

    setSelectedComponent(null);

  }

  const handleClickService = () => {
    setShowService(true);
    setShowWhatsapp(false);

    setSelectedComponent(null)

  }



  const images = [

    {
      id: uuidv4(),
      url: cristo,
      alt: 'Imagem 1',
      text: 'Alianças',
      component: () => <Cards propsCard={allianceCards} onClick={handleBackCard} />
    },
    {
      id: uuidv4(),
      url: brinco,
      alt: 'Imagem 2',
      text: 'Brincos',
      component: () => <Cards propsCard={brincoCard} onClick={handleBackCard} />

    },
    {
      id: uuidv4(),
      url: alianca,
      alt: 'Imagem 2',
      text: 'Anéis',
      component: () => <Cards propsCard={aneisCard} onClick={handleBackCard} />
    },
    {
      id: uuidv4(),
      url: trevo,
      alt: 'Imagem 2',
      text: 'Colares',
      component: () => <Cards propsCard={colarCard} onClick={handleBackCard} />
    },
    {
      id: uuidv4(),
      url: canga,
      alt: 'Imagem 2',
      text: 'Pingentes',
      component: () => <Cards propsCard={pingenteCard} onClick={handleBackCard} />
    },
    {
      id: uuidv4(),
      url: escapulario,
      alt: 'Imagem 2',
      text: 'escapulários',
      component: () => <Cards propsCard={escapularioCard} onClick={handleBackCard} />
      ,
    }

  ];




  const handleClickCard = (clickedImage: CustomImage) => {
    setClickedImage(clickedImage);
    setSelectedComponent(clickedImage.component);

  };



  return (
    <div className={styles.app}>
      <Header onClickContact={handleClickContact} onClickService={handleClickService} />



      {showCard && showWhatsapp ? (
        <div>
          <ContactUs onClick={handleBack} />
        </div>
      ) : selectedComponent ? (
        <div>{selectedComponent}</div>
      ) : showService ? (
        <div>
          <Services onClick={handleBack} />
        </div>
      ) : (
        <>

          <Swiper

            className={styles.swiper}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}

            loop={true}


            navigation={false}
            pagination={{ clickable: true }}



          >
            {imageCarousel.map((img) => (


              <SwiperSlide key={img.id} >
                <div className={styles.swiperslide}  >

                  <img

                    src={img.url}
                    alt={img.alt}

                  />
                </div>
              </SwiperSlide>

            ))}


          </Swiper>
          <div className={styles.category}>

            <h2>Conheça nossa Coleção</h2>
            <p>A Modernidade e a Sofisticação em Peças Artesanais e Exclusivas</p>
          </div>
          <div className={styles.line}></div>
          <div className={styles.options}>



            <Category image={images} onClick={handleClickCard} />



          </div>

        </>
      )}



    </div>
  )
}

export default HomePage;
