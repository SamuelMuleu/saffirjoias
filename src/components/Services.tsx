import { ArrowFatLeft } from "@phosphor-icons/react"
import styles from "./Services.module.css";
import aliancasemsolda5 from "../assets/aliancasemsolda5.png";
import aliancasemsolda1 from "../assets/aliancasemsolda.png";
import aliancasemsolda2 from "../assets/aliancasemsolda2.png";
import aliancasemsolda3 from "../assets/aliancasemsolda3.png";
import aliancasemsolda4 from "../assets/aliancasemsolda6.png";
import { v4 as uuidv4 } from 'uuid';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface Props {
    onClick: () => void;
}

export default function Services({ onClick }: Props) {
    const imagens = [
        { id: uuidv4(), img: aliancasemsolda5 },
        { id: uuidv4(), img: aliancasemsolda4 },
        { id: uuidv4(), img: aliancasemsolda3 },
        { id: uuidv4(), img: aliancasemsolda2 },
        { id: uuidv4(), img: aliancasemsolda1 },
    ];

    return (

        <div>
            <div className={styles.back} onClick={onClick}> <ArrowFatLeft />Voltar</div>



            <div >Alianças sem Solda</div>

            <Swiper className={styles.titleAlliance}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}

                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <div className={styles.alliance}>

                    <SwiperSlide> <img src={aliancasemsolda1} alt="" /></SwiperSlide>
                    <SwiperSlide> <img src={aliancasemsolda4} alt="" /></SwiperSlide>
                    <SwiperSlide>  <img src={aliancasemsolda5} alt="" /></SwiperSlide>
                    <SwiperSlide> <img src={aliancasemsolda3} alt="" /></SwiperSlide>
                    <SwiperSlide> <img src={aliancasemsolda2} alt="" /></SwiperSlide>

                </div>
            </Swiper>

            <div>Consertos em Geral</div>
            <div>Fundições</div>
            <div>Joias Personalizadas</div>

        </div>
    );
}
