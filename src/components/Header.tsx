
import styles from "./Header.module.css"
import image from "../assets/image1.png"

import { WhatsappLogo, CallBell, MagnifyingGlass } from "@phosphor-icons/react";


interface Props {

    onClickContact: () => void;
    onClickService: () => void;



}
export default function Header({ onClickContact, onClickService }: Props) {

    function reloadPage() {
        location.reload();

    }



    return (

        <div className={styles.header}>
            <div className={styles.help}>

                <button onClick={onClickContact} className={styles.talkToUs}>Fale conosco <WhatsappLogo size={18} /> </button> 
                <button onClick={onClickService} className={styles.service}>Serviços<CallBell size={18} /> </button>


            </div>

            <img className={styles.image} src={image} alt="" onClick={reloadPage} />

            <form className={styles.search}>
                <input className={styles.input} placeholder="Pesquisar" type="text" />
                <button className={styles.button}>
                    <MagnifyingGlass size={18} />

                </button>
            </form>
        </div>
    )
}