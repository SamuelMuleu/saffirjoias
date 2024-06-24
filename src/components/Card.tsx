import { useState } from 'react';
import styles from './Card.module.css';
import { XCircle, Pencil } from "@phosphor-icons/react";


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { auth, firestore } from "../services/firebaseConfig.ts";
import Modal from 'react-modal';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect } from 'react';

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
    const { propsCard, onClickCard } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(6);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);



    const navigate = useNavigate();

    const handleImageClick = (img: string) => {
        setCurrentImage(img);
        setIsOpen(true);
        setPostPerPage

    };

    const openModalEdit = () => {
        setIsModalOpen(true);
    };

    const closeModalEdit = () => {
        setIsModalOpen(false);
    };


    const closeModal = () => {
        setIsOpen(false);

        setCurrentImage(null);

    };


    useEffect(() => {
        const checkAdminRole = async () => {
            try {
                const user = auth.currentUser;
                if (user) {
                    const userDocRef = doc(firestore, 'users', user.uid);
                    const userDocSnap = await getDoc(userDocRef);

                    if (userDocSnap.exists()) {
                        const userData = userDocSnap.data();

                        setIsAdmin(userData.role === 'admin');

                    } else {
                        console.log('No such document!');
                    }
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        checkAdminRole();
    }, []);



    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPosts = propsCard ? propsCard.slice(firstPostIndex, lastPostIndex) : [];

    return (


        <div>



            {isAdmin ? <div className={styles.modal}> <button
                onClick={openModalEdit}
                className={styles.editButton}>
                <Pencil
                    size={32} /></button>

                <Modal
                    isOpen={isModalOpen}
                    className={styles.modalEdit}
                    onRequestClose={closeModalEdit}
                    overlayClassName={styles.overlay}>

                    <Database />
                    <div className={styles.closeButtonContainer}>

                    <button onClick={closeModalEdit}
                       
                       className={styles.closeButtonEdit}
                       >
                        <XCircle
                            size={32} />
                    </button>
                    </div>
                </Modal>
            </div> : null}


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
