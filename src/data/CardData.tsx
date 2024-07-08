import { v4 as uuidv4 } from "uuid";

import saffir14 from "../assets/saffir4.png";

import solitarioExplicaçao from "../assets/solitarioExplicaçao.png";

import aliançaExplicaçao from "../assets/aliançaExplicaçao.png";
import aliançaExplicaçao2 from "../assets/aliançaExplicaçao2.png";

import saffirBulgari from "../assets/saffirBulgari.png";

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

const imageCarousel: ImageCarouselItem[] = [
  {
    id: uuidv4(),
    url: saffirBulgari,
    alt: "Imagem 1",
    text: "Alianças",
  },
  {
    id: uuidv4(),
    url: aliançaExplicaçao2,
    alt: "Imagem 1",
    text: "Alianças",
  },
  {
    id: uuidv4(),
    url: saffir14,
    alt: "Imagem 1",
    text: "Alianças",
  },
  {
    id: uuidv4(),
    url: solitarioExplicaçao,
    alt: "Imagem 1",
    text: "Alianças",
  },
  {
    id: uuidv4(),
    url: aliançaExplicaçao,
    alt: "Imagem 1",
    text: "Alianças",
  },
];

export { imageCarousel };
