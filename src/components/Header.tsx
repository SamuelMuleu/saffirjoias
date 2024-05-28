
import styles from "./Header.module.css"
import image from "../assets/image1.png"


import React from 'react';

import Modal from 'react-modal';

import { WhatsappLogo, CallBell, MagnifyingGlass, List } from "@phosphor-icons/react";
import { useState } from "react";


interface Props {

    onClickContact: () => void;
    onClickService: () => void;




}
export default function Header({ onClickContact, onClickService }: Props) {

    const [search, setSearch] = useState('');

    function reloadPage() {
        location.reload();

    }



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


    return (

        <div className={styles.header}>
            <div className={styles.help}>

                <button className={styles.list} onClick={openModal}><List size={44} /></button>
                <Modal
                    isOpen={modalIsOpen}

                    onRequestClose={closeModal}
                    className={styles.modal}

                >
                    <div className={styles.wrapperModal}>

                    <button onClick={onClickContact} className={styles.talkToUsMobile}>Fale conosco <WhatsappLogo size={18} /> </button>
                    <button onClick={onClickService} className={styles.serviceMobile}>Serviços<CallBell size={18} /> </button>
                    <form className={styles.search} >

                        <input value={search} onChange={handleSearchItems} className={styles.inputMobile} placeholder="Pesquisar" type="search" />
                        <button className={styles.buttonMobile}  >
                            <MagnifyingGlass size={18} />

                        </button>
                    </form>
                    <button onClick={closeModal}>close</button>
                    </div>

                </Modal>


                <button onClick={onClickContact} className={styles.talkToUs}>Fale conosco <WhatsappLogo size={18} /> </button>
                <button onClick={onClickService} className={styles.service}>Serviços<CallBell size={18} /> </button>


            </div>


            <img className={styles.image} src={image} alt="" onClick={reloadPage} />

            <form className={styles.search} >

                <input value={search} onChange={handleSearchItems} className={styles.input} placeholder="Pesquisar" type="search" />
                <button className={styles.button}  >
                    <MagnifyingGlass size={18} />

                </button>
            </form>
        </div>
    )
}