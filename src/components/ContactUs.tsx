import styles from "./ContactUs.module.css";

import whatsapp from "../assets/whatsapp.svg"
import { ArrowFatLeft } from "@phosphor-icons/react"
import sara from "../assets/sara1.png";
import michele from "../assets/michele.png";
import { Link } from "react-router-dom";



export default function ContactUs() {


    return (
        <div >
            <Link className={styles.back} to={"/"}> <ArrowFatLeft />Voltar</Link>
            <div className={styles.contactUs}>
                <div className={styles.header}>

                    <a href="https://api.whatsapp.com/send?phone=5522998371359" >

                        <img
                            src={sara}
                            className={styles.image} />
                        <div>Atendente Sara (22) 99837-1359 </div>

                    </a>
                    <a 
                    className={styles.button}
                        href="https://api.whatsapp.com/send?phone=5522998371359"
                        target="_blank">
                   
                        <img src={whatsapp} className={styles.whatsapp} />
                    </a>
                    <div className={styles.line}></div> 
                    <a
                     href="https://api.whatsapp.com/send?phone=5522997927387" >

                    <img 
                    src={michele}
                     className={styles.image} />
                    <div>Atendente Michele (22) 99792-7387</div>

                     </a>
                    <a   
                    className={styles.button}
                    href="https://api.whatsapp.com/send?phone=5522997927387" 
                    target="_blank">

                        <img src={whatsapp} className={styles.whatsapp} />
                    </a>
                </div>

            </div>



        </div>
    )
}