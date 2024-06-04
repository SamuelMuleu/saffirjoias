
import styles from "./Header.module.css"
import image from "../assets/image1.png"


import React from 'react';

import Modal from 'react-modal';

import { MagnifyingGlass, List, X } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Header() {

    const [search, setSearch] = useState('');


    const [modalIsOpen, setIsOpen] = React.useState(false);





    function openModal() {
        setIsOpen(true);


    }



    function closeModal() {
        setIsOpen(false);



    }



    const handleSearchItems = (event: React.ChangeEvent<HTMLInputElement>) => {

        event.preventDefault();
        setSearch(event.target.value);
        console.log(search);

    }
   const handleClickItem = (callback: () => void) => {
    callback();
    closeModal();
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

                        <Link to={"/"} onClick={()=>handleClickItem(closeModal)} className={styles.serviceMobile}>Inicio</Link>
                        <Link to={"/faleconosco"} onClick={()=>handleClickItem(closeModal)} className={styles.talkToUsMobile}>Fale conosco </Link>
                        <Link to={"/servicos"} onClick={()=>handleClickItem(closeModal)} className={styles.serviceMobile}>Serviços </Link>
                        <form className={styles.search} >

                            <input value={search} onChange={handleSearchItems} className={styles.inputMobile} placeholder="Pesquisar" type="text" />
                            <button className={styles.buttonMobile}  >
                                <MagnifyingGlass size={18} />

                            </button>
                        </form>
                        <button className={styles.close} onClick={closeModal}><X size={30} /></button>
                    </div>

                </Modal>

                <Link to={"/"} onClick={()=>handleClickItem(closeModal)} className={styles.service}>Inicio</Link>
                <Link to="/faleconosco" onClick={()=>handleClickItem(closeModal)} className={styles.talkToUs}>Fale conosco</Link>
                <Link to="/servicos" onClick={()=>handleClickItem(closeModal)} className={styles.service}>Serviços</Link>

            </div>


            <img className={styles.image} src={image} alt=""/>

            <form className={styles.search} >

                <input value={search} onChange={handleSearchItems} className={styles.input} placeholder="Pesquisar" type="text" />
                <button className={styles.button}  >
                    <MagnifyingGlass size={18} />

                </button>
            </form>
        </div>
    )
}