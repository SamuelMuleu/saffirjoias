import alianca from "../assets/aliança.png";
//import brinco3 from "../assets/brinco3.png";//
import trevo from "../assets/trevo.png";
import aneis from "../assets/aneis.png";
import pingentes from "../assets/pingentes.png";
import cordao from "../assets/cordao.png";
import brinco from "../assets/brinco.png";
import { v4 as uuidv4 } from 'uuid';
import saffir1 from "../assets/saffir1.png";
//import saffir2 from "../assets/saffir2.png";
//import saffir3 from "../assets/saffir3.png";//
//import saffir4 from "../assets/saffir4.png";//
//import saffir5 from "../assets/saffir5.png";//
import saffir6 from "../assets/saffir6.png";
import saffir7 from "../assets/saffir7.png";
//import saffir8 from "../assets/saffir8.png";
//import saffir9 from "../assets/saffir9.png";
import saffir10 from "../assets/saffir10.png";
import saffir11 from "../assets/saffir11.png";
import saffir12 from "../assets/saffir12.png";
//import saffir13 from "../assets/saffir13.png";
import saffir14 from "../assets/saffir14.png";
import saffir15 from "../assets/saffir15.png";
//import saffir16 from "../assets/saffir16.png";
import saffir17 from "../assets/saffir17.png";
import saffir18 from "../assets/saffir18.png";
import saffir19 from "../assets/saffir19.png";
//import saffir20 from "../assets/saffir20.png";
import saffir21 from "../assets/saffir21.png";
import saffir22 from "../assets/saffir22.png";
import saffir23 from "../assets/saffir23.png";
//import saffir24 from "../assets/saffir24.png";
//import saffir25 from "../assets/saffir25.png";
//import saffir26 from "../assets/saffir26.png";
import saffir27 from "../assets/saffir27.png";
import saffir28 from "../assets/saffir28.png";
//import saffir29 from "../assets/saffir29.png";
//import saffir30 from "../assets/saffir30.png";
//import saffir31 from "../assets/saffir31.png";
//import saffir32 from "../assets/saffir32.png";
//import saffir33 from "../assets/saffir33.png";
import saffir34 from "../assets/saffir34.png";
import personalizado from "../assets/personalizado.png";

import saffir35 from "../assets/saffir35.png";
//import saffir36 from "../assets/saffir36.png";//
//import saffir37 from "../assets/saffir37.png";
//import saffir38 from "../assets/saffir38.png";
//import saffir39 from "../assets/saffir39.png";
import saffir40 from "../assets/saffir40.png";
//import saffir41 from "../assets/saffir41.png";
//import saffir42 from "../assets/saffir42.png";
//import saffir43 from "../assets/saffir43.png";
//import saffir44 from "../assets/saffir44.png";
import saffir45 from "../assets/saffir45.png";


export interface Product {
    name: string;
    img: string;
    description: string;
    price: string;
    color: string;
}

export interface ImageCarouselItem {
    id: string;
    url: string;
    alt: string;
    text: string;
}

const allianceCards: Product[] = [
    {
        name: 'Reta',
        img: saffir45,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Reta Italiana',
        img: saffir28,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Reta',
        img: saffir6,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Reta',
        img: saffir7,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Abaulada',
        img: saffir10,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Reta',
        img: saffir40,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },

];

const brincoCard: Product[] = [
    {
        name: 'Reta',
        img: brinco,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Reta',
        img: alianca,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Reta',
        img: alianca,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },

];

const aneisCard: Product[] = [
    {
        name: 'Reta',
        img: aneis,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Reta',
        img: saffir35,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Reta',
        img: saffir17,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Reta',
        img: saffir22,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {

        name: 'Reta',
        img: saffir21,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Reta',
        img: saffir18,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },


];

const colarCard: Product[] = [
    {
        name: 'Reta',
        img: cordao,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Reta',
        img: saffir19,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Reta',
        img: saffir15,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Reta',
        img: trevo,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },

];

const pingenteCard: Product[] = [
    {
        name: 'Reta',
        img: pingentes,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Reta',
        img: saffir34,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Reta',
        img: personalizado,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },

];

const escapularioCard: Product[] = [
    {
        name: 'Reta',
        img: saffir23,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Reta',
        img: saffir12,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Reta',
        img: saffir11,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Reta',
        img: alianca,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Reta',
        img: alianca,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },

];

const imageCarousel: ImageCarouselItem[] = [
    {
        id: uuidv4(),
        url: saffir17,
        alt: 'Imagem 1',
        text: 'Alianças',
    },
    {
        id: uuidv4(),
        url: saffir23,
        alt: 'Imagem 1',
        text: 'Alianças',
    },
    {
        id: uuidv4(),
        url: saffir14,
        alt: 'Imagem 1',
        text: 'Alianças',
    },
    {
        id: uuidv4(),
        url: saffir27,
        alt: 'Imagem 1',
        text: 'Alianças',
    },
    {
        id: uuidv4(),
        url: saffir19,
        alt: 'Imagem 1',
        text: 'Alianças',
    },

];

export { allianceCards, brincoCard, aneisCard, colarCard, pingenteCard, escapularioCard, imageCarousel };
