import { useState } from 'react';
import styles from './Card.module.css';
import { ArrowFatLeft, XCircle } from "@phosphor-icons/react";


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Modal from 'react-modal';



import Pagination from './Pagination.tsx';

interface Card {
    name: string;
    img: string;
    description: string;
    price: string;

}

interface Props {
    propsCard: Card[];
    onClick: () => void ;
    onClickCard: (clickedCard: Card) => void ;

}



export default function Alliance(props: Props) {
    const { onClick, propsCard, onClickCard } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(8);



    const handleImageClick = (img: string) => {
        setCurrentImage(img);
        setIsOpen(true);

    };




    const closeModal = () => {
        setIsOpen(false);
        setPostPerPage
        setCurrentImage(null);
      
    };

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPosts = propsCard ?  propsCard.slice(firstPostIndex, lastPostIndex):[];


    return (
        <div>
            <div className={styles.back} onClick={onClick}>
                <ArrowFatLeft /> Voltar
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
                            >Falar com Atendente
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
