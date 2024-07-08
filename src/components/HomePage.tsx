import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";
import "swiper/css/scrollbar";
import Category from "./Category.tsx";
import ContactUs from "./ContactUs.tsx";
import Services from "./AboutUs.tsx";
import { v4 as uuidv4 } from "uuid";
import styles from "./HomePage.module.css";
import { useEffect, useState } from "react";
import Card from "./Card.tsx";
import { imageCarousel } from "../data/CardData.tsx";
import pingentes from "../assets/pingentes.png";
import trevo from "../assets/saffir4.png";
import correntes from "../assets/escapularios.png";
import brinco from "../assets/brincos.png";
import aneis from "../assets/anelCoraçao.png";
import alianças from "../assets/saffirBulgari.png";
import Modal from "react-modal";
import { XCircle, Pencil } from "@phosphor-icons/react";
import Database from "./DataBase.tsx";

import { doc, getDoc } from "firebase/firestore";
import { auth, firestore } from "../services/firebaseConfig.ts";

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
  const [selectedComponent, setSelectedComponent] =
    useState<JSX.Element | null>(null);
  const [clickedImage, setClickedImage] = useState<CustomImage | null>(null);
  const [showCard, setShowCard] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState("user");


  const [selectedText, setSelectedText] = useState<string>('');


  useEffect(() => {
    const checkAdminRole = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDocRef = doc(firestore, "users", user.uid);
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            if (userData.role === "admin") {
              setIsAdmin("admin");
            } else {
              setIsAdmin("user");
              localStorage.setItem("isAdmin", "user");
            }
          } else {
            console.log("No such document!");
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        checkAdminRole();
      } else {
        setIsAdmin("user");
        localStorage.setItem("isAdmin", "user");
      }
    });

    return () => unsubscribe();
  }, []);

  const verifyRole = localStorage.getItem("isAdmin");

  useEffect(() => {
    if (clickedImage) {
      setSelectedComponent(clickedImage.component);


    }
  }, [clickedImage]);

  console.log(selectedText)

  const handleBackCard = () => {
    setShowCard(true);
    setSelectedComponent(null);
    setShowWhatsapp(false);
    setShowService(false);
  };

  const handleClicktAtendant = (clickedCard: { name: string; img: string }) => {
    console.log(clickedCard);
    const itemName = clickedCard.name;
    const itemImg = clickedCard.img;
    const mensagem = `Ola, gostaria de saber mais sobre esse item ${itemName}, seria essa imagem ${itemImg}`;
    const mensagemCodificada = encodeURIComponent(mensagem);
    const Whatsapp = "+5522998371359";
    window.open(
      `https://wa.me/${Whatsapp}?text=${mensagemCodificada}`,
      "_blank"
    );
  };





  const images = [
    {
      id: uuidv4(),
      url: alianças,
      alt: "Imagem 1",
      text: "Alianças",
      component: () => (
        <Card categoryCard="Alianças" onClick={handleBackCard} onClickCard={handleClicktAtendant} />
      ),
    },
    {
      id: uuidv4(),
      url: brinco,
      alt: "Imagem 2",
      text: "Brincos",
      component: () => (
        <Card categoryCard="Brincos"  onClick={handleBackCard} onClickCard={handleClicktAtendant} />
      ),
    },
    {
      id: uuidv4(),
      url: aneis,
      alt: "Imagem 2",
      text: "Aneis",
      component: () => (
        <Card categoryCard="Aneis" onClick={handleBackCard} onClickCard={handleClicktAtendant} />
      ),
    },
    {
      id: uuidv4(),
      url: trevo,
      alt: "Imagem 2",
      text: "Colares",
      component: () => (
        <Card  categoryCard="Colares" onClick={handleBackCard} onClickCard={handleClicktAtendant} />
      ),
    },
    {
      id: uuidv4(),
      url: pingentes,
      alt: "Imagem 2",
      text: "Pingentes",
      component: () => (
        <Card  categoryCard="Pingentes"  onClick={handleBackCard} onClickCard={handleClicktAtendant} />
      ),
    },
    {
      id: uuidv4(),
      url: correntes,
      alt: "Imagem 2",
      text: "Correntes",
      component: () => (
        <Card categoryCard="Correntes" onClick={handleBackCard} onClickCard={handleClicktAtendant} />
      ),
    },
  ];

  

  const handleClickCard = (clickedImage: CustomImage) => {
    setClickedImage(clickedImage);
    setSelectedText(clickedImage.text)
    setSelectedComponent(clickedImage.component);
  };

  const openModalEdit = () => {
    setIsModalOpen(true);
  };

  const closeModalEdit = () => {
    setIsModalOpen(false);
  };
  console.log(selectedText)


  return (
    <div className={styles.app}>
      {showCard && showWhatsapp ? (
        <div>
          <ContactUs />
        </div>
      ) : selectedComponent ? (
        <div>{selectedComponent}</div>
      ) : showService ? (
        <div>
          <Services />
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
            loop={true}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          >
            {imageCarousel.map((img) => (
              <SwiperSlide key={img.id}>
                <div className={styles.swiperslide}>
                  <img src={img.url} alt={img.alt} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className="swiper-pagination"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              top: "28rem",
            }}
          ></div>

          <div className={styles.category}>
            <h1 className={styles.text}>Conheça nossa Coleção</h1>
            <p>
              A Modernidade e a Sofisticação em Peças{" "}
              <span className={styles.span}>Artesanais e Exclusivas</span>
            </p>
          </div>
          <div className={styles.line}></div>
          <h2 className={styles.text2}>Escolha Por Categoria</h2>
          <div className={styles.options}>
            {isAdmin === "admin" || verifyRole === "admin" ? (
              <div className={styles.modal}>
                {" "}
                <button onClick={openModalEdit} className={styles.editButton}>
                  <Pencil size={32} />
                </button>
                <Modal
                  isOpen={isModalOpen}
                  className={styles.modalEdit}
                  onRequestClose={closeModalEdit}
                  overlayClassName={styles.overlay}
                >
                  <Database />
                  <div className={styles.closeButtonContainer}>
                    <button
                      onClick={closeModalEdit}
                      className={styles.closeButtonEdit}
                    >
                      <XCircle size={32} />
                    </button>
                  </div>
                </Modal>
              </div>
            ) : null}

            <Category image={images} onClick={handleClickCard} />
          </div>
        </>
      )}
    </div>
  );
}

export default HomePage;
