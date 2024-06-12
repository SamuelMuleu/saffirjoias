
import styles from "./Header.module.css"
import image from "../assets/image1.png"


import React from 'react';

import Modal from 'react-modal';

import { List, X } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Header() {


    const [activeLink, setActiveLink] = useState("Inicio");
    const [modalIsOpen, setIsOpen] = React.useState(false);





    function openModal() {
        setIsOpen(true);


    }



    function closeModal() {
        setIsOpen(false);



    }




    const handleCloseModalAndNavigate = (callback: () => void) => {
        callback();
        closeModal();
        setActiveLink("");
     
    }
    





    return (

        <div className={styles.header}>
            <div className={styles.help}>

                <button className={styles.list} onClick={openModal}><List size={44} /></button>
                <Modal
                    isOpen={modalIsOpen}

                    onRequestClose={closeModal}

                    className={styles.modal}

                    overlayClassName={styles.overlay}


                >
                    <div className={styles.wrapperModal}>

                        <Link to={"/"} onClick={() => handleCloseModalAndNavigate(closeModal)} className={styles.serviceMobile}>Inicio</Link>
                        <Link to={"/faleconosco"} onClick={() => handleCloseModalAndNavigate(closeModal)} className={styles.talkToUsMobile}>Fale conosco </Link>
                        <Link to={"/sobrenos"} onClick={() => handleCloseModalAndNavigate(closeModal)} className={styles.serviceMobile}>Sobre Nós</Link>
                      
                        <button className={styles.close} onClick={closeModal}><X size={30} /></button>
                    </div>

                </Modal>

                <Link to={"/"}
                    onClick={() => setActiveLink("Inicio")}
                    className={`${styles.start} ${activeLink === "Inicio" ? styles.active :styles.desactive}`}>
                    Inicio
                </Link>
                <Link to="/faleconosco" onClick={() => setActiveLink("FaleConosco")}
                    className={`${styles.talkToUs} ${activeLink === "FaleConosco" ? styles.active : styles.desactive}`}>Fale conosco</Link>
                <Link to="/sobrenos" onClick={() => setActiveLink("Servicos")}
                    className={`${styles.service} ${activeLink === "Servicos" ? styles.active :styles.desactive}`}>Sobre Nos</Link>

            </div>


            <img className={styles.image} src={image} alt="" />

           
        </div>
    )
}