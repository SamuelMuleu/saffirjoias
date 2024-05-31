import styles from "./ContactUs.module.css";

import whatsapp from "../assets/whatsapp.svg"
import { ArrowFatLeft } from "@phosphor-icons/react"
import sara from "../assets/sara1.png";


interface Props {

    onClick?: () => void;

}
export default function ContactUs(props: Props) {
    const { onClick } = props


    return (
        <div >
            <div className={styles.back} onClick={onClick}> <ArrowFatLeft />Voltar</div>
            <div className={styles.contactUs}>
                <div className={styles.header}>

                    <a href="https://api.whatsapp.com/send?phone=5522998371359" >

                        <img
                            src={sara}
                            className={styles.image} />
                        <div>Atendente Sara (22) 99837-1359 </div>

                    </a>
                    <a 
                    className={styles.a}
                        href="https://api.whatsapp.com/send?phone=5522998371359"
                        target="_blank">
                   
                        <img src={whatsapp} className={styles.whatsapp} />
                    </a>
                    <div className={styles.line}></div>

                    <a
                     href="https://api.whatsapp.com/send?phone=5522997927387" >

                    <img 
                    src="https://github.com/samuelmuleu.png"
                     className={styles.image} />
                    <div>Atendente Michele (22) 99792-7387</div>

                     </a>
                    <a   
                    className={styles.a}
                    href="https://api.whatsapp.com/send?phone=5522997927387" 
                    target="_blank">

                        <img src={whatsapp} className={styles.whatsapp} />
                    </a>
                </div>

            </div>



        </div>
    )
}