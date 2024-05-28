import { useState } from 'react';
import styles from './Card.module.css';
import { ArrowFatLeft, XCircle } from "@phosphor-icons/react";




import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Modal from 'react-modal';





interface Card {
    name: string;
    img: string;
    description: string;
    price: string;

}

interface Props {
    propsCard: Card[];
    onClick: () => void;

}



export default function Alliance(props: Props) {
    const { onClick, propsCard } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState<string | null>(null);

    const handleImageClick = (img: string) => {
        setCurrentImage(img);
        setIsOpen(true);

    };




    const closeModal = () => {
        setIsOpen(false);
        setCurrentImage(null);
    };


    return (
        <div>
            <div className={styles.back} onClick={onClick}>
                <ArrowFatLeft /> Voltar
            </div>
            <div>

                <div

                    className={styles.container}
                >

                    {propsCard.map((card, index) => (
                        <div key={index}  className={styles.card} >

                            <img

                                src={card.img}
                                alt={card.description}
                                onClick={() => handleImageClick(card.img)}
                                className={styles.image}
                            />
                            <p > {card.name}</p>
                            <p>{card.description}</p>
                            <button className={styles.button}>Falar com Atendente</button>

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
        </div>
    )
}
