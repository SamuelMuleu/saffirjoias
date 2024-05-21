import { useState } from 'react';
import styles from './Card.module.css';
import { ArrowFatLeft } from "@phosphor-icons/react";

import 'react-image-lightbox/style.css';

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

    return (
        <div>
            <div className={styles.back} onClick={onClick}>
                <ArrowFatLeft /> Voltar
            </div>
            <div className={styles.alliance}>
                {propsCard.map((card, index) => (
                    <div key={index}>
                        <img
                            src={card.img}
                            alt={card.description}
                            onClick={() => handleImageClick(card.img)}
                            className={styles.image}
                        />
                        <p>{card.name}</p>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}
