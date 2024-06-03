
import styles from "./Header.module.css"
import image from "../assets/image1.png"


import React from 'react';

import Modal from 'react-modal';

import { MagnifyingGlass, List,X } from "@phosphor-icons/react";
import { useState } from "react";


interface Props {

    onClickContact: () => void;
    onClickService: () => void;




}
export default function Header({ onClickContact, onClickService }: Props) {

    const [search, setSearch] = useState('');


    const [modalIsOpen, setIsOpen] = React.useState(false);

    function reloadPage() {
        location.reload();

    }



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

                        <button onClick={() => handleClickItem(onClickContact)} className={styles.talkToUsMobile}>Fale conosco </button>
                        <button onClick={() => handleClickItem(onClickService)}className={styles.serviceMobile}>Serviços </button>
                        <form className={styles.search} >

                            <input value={search} onChange={handleSearchItems} className={styles.inputMobile} placeholder="Pesquisar" type="text" />
                            <button className={styles.buttonMobile}  >
                                <MagnifyingGlass size={18} />

                            </button>
                        </form>
                        <button className={styles.close} onClick={closeModal}><X size={30}/></button>
                    </div>

                </Modal>


                <button onClick={onClickContact} className={styles.talkToUs}>Fale conosco </button>
                <button onClick={onClickService} className={styles.service}>Serviços </button>


            </div>


            <img className={styles.image} src={image} alt="" onClick={reloadPage} />

            <form className={styles.search} >

                <input value={search} onChange={handleSearchItems} className={styles.input} placeholder="Pesquisar" type="text" />
                <button className={styles.button}  >
                    <MagnifyingGlass size={18} />

                </button>
            </form>
        </div>
    )
}