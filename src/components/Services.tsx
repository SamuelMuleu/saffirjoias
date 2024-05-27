import { ArrowFatLeft } from "@phosphor-icons/react"
import styles from "./Services.module.css";
import aliancasemsolda5 from "../assets/aliancasemsolda5.png";
import aliancasemsolda1 from "../assets/aliancasemsolda.png";
import aliancasemsolda2 from "../assets/aliancasemsolda2.png";
import aliancasemsolda3 from "../assets/aliancasemsolda3.png";
import aliancasemsolda4 from "../assets/aliancasemsolda6.png";
import fundiçoes from "../assets/fundições.png";
import consertos from "../assets/consertos.png";
import personalizado from "../assets/personalizado.png";


import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/scrollbar';

interface Props {
    onClick: () => void;
}

export default function Services({ onClick }: Props) {


    return (

        <div>
            <div className={styles.back} onClick={onClick}> <ArrowFatLeft />Voltar</div>






<div className={styles.text} >Alianças Sem Solda</div>

<Swiper className={styles.swiper}

    effect="fade"
    modules={[EffectFade, Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    slidesPerView={1}
    autoplay={{
        delay: 4000,
        disableOnInteraction: false,
    }}
    loop={true}
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
>
    <div className={styles.swiperslide}>

        <SwiperSlide><img src={aliancasemsolda1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={aliancasemsolda4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={aliancasemsolda5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={aliancasemsolda3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={aliancasemsolda2} alt="" /></SwiperSlide>






    </div>
</Swiper>

<div className={styles.imageWrapper}>

    <div className={styles.text} >Consertos em Geral</div>
    <img src={consertos} alt="" />
    <div className={styles.text} >Fundições</div>
    <img src={fundiçoes} alt="" />
    <div className={styles.text} >Joias Personalizadas</div>
    <img src={personalizado} alt="" />
</div>

</div>

    );
}
