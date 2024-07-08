import { useState } from "react";
import styles from "./Card.module.css";
import { XCircle, X } from "@phosphor-icons/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { auth, firestore } from "../services/firebaseConfig.ts";
import Modal from "react-modal";
import {
  doc,
  getDoc,
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { useEffect } from "react";

import Pagination from "./Pagination.tsx";
import { useNavigate } from "react-router-dom";

const db = getFirestore();

interface Card {
  id: string;
  name: string;
  img: string;
  description: string;
  category: string;
}

interface Props {
  categoryCard: string;
  onClick: () => void;
  onClickCard: (clickedCard: { name: string; img: string }) => void;
}

Modal.setAppElement("#root");

export default function Card(props: Props) {
  const { categoryCard, onClickCard } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(6);

  const [isAdmin, setIsAdmin] = useState(false);
  const [cards, setCards] = useState<Card[]>([]);

  const navigate = useNavigate();

  const handleImageClick = (img: string) => {
    setCurrentImage(img);
    setIsOpen(true);
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
          const userDocRef = doc(firestore, "users", user.uid);
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();

            setIsAdmin(userData.role === "admin");
            console.log(isAdmin);
          } else {
            console.log("No such document!");
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    checkAdminRole();
  }, []);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const cardsCollection = collection(db, "myCollection");
        const querySnapshot = await getDocs(cardsCollection);
        const fetchedCards: Card[] = [];

        querySnapshot.forEach((doc) => {
          const cardData = doc.data();
          fetchedCards.push({
            id: doc.id,
            name: cardData.name || "",
            img: cardData.image || "",
            description: cardData.description || "",
            category: cardData.category || "",
          });
        });

        setCards(fetchedCards);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCards();
  }, []);

  const deleteCard = async (id: String) => {
    try {
      await deleteDoc(doc(db, "myCollection", `${id}`));
      setCards(cards.filter((card) => card.id !== id));
    } catch (error) {
      console.error("Erro ao deletar o documento: ", error);

    }
  };

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const currentCards = cards.slice(indexOfFirstPost, indexOfLastPost);

  console.log(cards)
  const filteredCards = currentCards.filter(
    (card) => card.category === categoryCard
  );

  return (
    <div>
      <div className={styles.back} onClick={() => navigate(0)}>
        Voltar
      </div>
      <div>
        <div className={styles.container}>
          {filteredCards.map((card, index) => (
            <div key={index} className={styles.card}>
              <button className={styles.deleteButton} onClick={() => deleteCard(card.id)}>
                <X  size='20'/>
              </button>
              <img
                src={card.img}
                alt={card.description}
                onClick={() => handleImageClick(card.img)}
                className={styles.image}
              />
              <p className={styles.title}> {card.name}</p>
              <p>{card.description}</p>
              <button
                onClick={() => onClickCard(card)}
                className={styles.button}
                formTarget="_blank"
              >
                Saber Mais
              </button>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className={styles.modal}
        overlayClassName={styles.overlay}
      />
      {currentImage && (
        <img src={currentImage} alt="Current" className={styles.modalImage} />
      )}
      {currentImage && (
        <button onClick={closeModal} className={styles.closeButton}>
          <XCircle size={32} />
        </button>
      )}
      <div className={styles.pagination}>
        <Pagination
          totalPosts={cards.length}
          postsPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
