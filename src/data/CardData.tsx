import alianca from "../assets/aliança.png";

import { v4 as uuidv4 } from 'uuid';
import brinco3 from "../assets/brinco3.png";
import canga from "../assets/canga.png";
import trevo from "../assets/trevo.png";
import aneis from "../assets/aneis.png";

import pingentes from "../assets/pingentes.png";
import anelpingente from "../assets/anelpingente.png";
import cordao from "../assets/cordao.png";


import escapulario from "../assets/escapulario.png";

import brinco from "../assets/brinco.png";



const allianceCards = [
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
    {
        name: 'Reta',
        img: alianca,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Abaulada',
        img: alianca,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Abaulada',
        img: alianca,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: ' Abaulada',
        img: alianca,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Abaulada',
        img: alianca,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Abaulada',
        img: alianca,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },

];

const brincoCard = [
    {
        name: 'Reta',
        img: brinco,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Reta',
        img: brinco,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Reta',
        img: brinco,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Reta',
        img: brinco,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Reta',
        img: brinco,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Abaulada',
        img: brinco,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Abaulada',
        img: brinco,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: ' Abaulada',
        img: brinco,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Abaulada',
        img: brinco,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Abaulada',
        img: brinco,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },

];


const aneisCard = [

    {
        name: 'Reta',
        img: aneis,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Reta',
        img: aneis,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Reta',
        img: aneis,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Reta',
        img: aneis,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Reta',
        img: aneis,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Abaulada',
        img: aneis,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Abaulada',
        img: aneis,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: ' Abaulada',
        img: aneis,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Abaulada',
        img: aneis,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Abaulada',
        img: aneis,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },

]
const colarCard = [

    {
        name: 'Reta',
        img: pingentes,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Reta',
        img: pingentes,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Reta',
        img: pingentes,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Reta',
        img: pingentes,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Reta',
        img: pingentes,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Abaulada',
        img: pingentes,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Abaulada',
        img: pingentes,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: ' Abaulada',
        img: pingentes,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Abaulada',
        img: pingentes,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Abaulada',
        img: pingentes,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },

];
const pingenteCard = [

    {
        name: 'Reta',
        img: trevo,
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
    {
        name: 'Reta',
        img: trevo,
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
    {
        name: 'Reta',
        img: trevo,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Abaulada',
        img: trevo,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Abaulada',
        img: trevo,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: ' Abaulada',
        img: trevo,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Abaulada',
        img: trevo,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Abaulada',
        img: trevo,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },

];
const escapularioCard = [

    {
        name: 'Reta',
        img: escapulario,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Reta',
        img: escapulario,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Reta',
        img: escapulario,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Reta',
        img: escapulario,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Reta',
        img: escapulario,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Abaulada',
        img: escapulario,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Abaulada',
        img: escapulario,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: ' Abaulada',
        img: escapulario,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Abaulada',
        img: escapulario,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },
    {
        name: 'Abaulada',
        img: escapulario,
        description: 'Alianças sem Solda em Ouro 18k, 5mm',
        price: 'R$ 100,00',
        color: '#000000',
    },

];





const imageCarousel = [
    {
        id: uuidv4(),
        url: escapulario,
        alt: 'Imagem 1',

        text: 'Alianças',
    },
    {
        id: uuidv4(),
        url: aneis,
        alt: 'Imagem 1',

        text: 'Alianças',
    },
    {
        id: uuidv4(),
        url: cordao,
        alt: 'Imagem 2',

        text: 'Pulseiras'
    },
    {
        id: uuidv4(),
        url: alianca,
        alt: 'Imagem 2',

        text: 'Brincos'
    },
    {
        id: uuidv4(),
        url: trevo,
        alt: 'Imagem 2',

        text: 'Colares'
    },
    {
        id: uuidv4(),
        url: canga,
        alt: 'Imagem 2',

        text: 'Anéis'
    },

    {
        id: uuidv4(),
        url: pingentes,
        alt: 'Imagem 2',

        text: 'Pingentes'
    },
    {
        id: uuidv4(),
        url: anelpingente,
        alt: 'Imagem 2',

        text: 'Pingentes'
    },
    {
        id: uuidv4(),
        url: brinco3,
        alt: 'Imagem 2',

        text: 'Pingentes'
    },
];



export { allianceCards, imageCarousel, brincoCard, aneisCard, colarCard, pingenteCard, escapularioCard };