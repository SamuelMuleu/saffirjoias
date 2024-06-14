import { useState } from 'react';
import styles from './Card.module.css';
import { XCircle } from "@phosphor-icons/react";


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Modal from 'react-modal';



import Pagination from './Pagination.tsx';
import { useNavigate } from 'react-router-dom';

import Database from "./DataBase.tsx";


interface Card {
    name: string;
    img: string;
    description: string;
    price: string;

}

interface Props {
    propsCard: Card[];
    onClick: () => void;
    onClickCard: (clickedCard: Card) => void;

}


Modal.setAppElement('#root');

export default function Card(props: Props) {
    const {  propsCard, onClickCard } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(6);

    const navigate = useNavigate();

    const handleImageClick = (img: string) => {
        setCurrentImage(img);
        setIsOpen(true);
        setPostPerPage

    };




    const closeModal = () => {
        setIsOpen(false);

        setCurrentImage(null);

    };
 
    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPosts = propsCard ? propsCard.slice(firstPostIndex, lastPostIndex) : [];


    return (


        <div>
          
            <Database/>
            <div className={styles.back} onClick={() => navigate(0)}>
                Voltar
            </div>
            <div>

                <div

                    className={styles.container}
                >

                    {currentPosts.map((card, index) => (


                        <div
                            key={index}
                            className={styles.card} >



                            <img

                                src={card.img}
                                alt={card.description}
                                onClick={() => handleImageClick(card.img)}

                                className={styles.image}
                            />
                            <p > {card.name}</p>
                            <p>{card.description}</p>
                            <button
                                onClick={() => onClickCard(card)}
                                className={styles.button}
                                formTarget='_blank'
                            >Saber Mais
                            </button>

                        </div>
                    ))}




                </div>
            </div>

            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                className={styles.modal}

                overlayClassName={styles.overlay} />
            {currentImage && <img
                src={currentImage}
                alt="Current"
                className={styles.modalImage} />}
            {
                currentImage &&
                <button onClick={closeModal}
                    className={styles.closeButton}>
                    <XCircle
                        size={32} />
                </button>
            }
            <div className={styles.pagination}>

                <Pagination
                    totalPosts={propsCard.length}
                    postsPerPage={postPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}

                />
            </div>

        </div>
    )
}
