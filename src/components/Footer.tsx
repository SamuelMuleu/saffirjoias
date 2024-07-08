import styles from "./Footer.module.css";
import faceSvg from "../assets/facebook.svg"
import instagram from "../assets/instagram1.svg"


export default function Footer() {

    return (
        <div className={styles.footer}>

            <div className={styles.socialmedia}>
                Acompanhe Nossas Redes Sociais
                <div className={styles.socialmediawrapper}>
                <a href="https://www.facebook.com/profile.php?id=100083311750657" target="_blank">

                    <img src={faceSvg} alt="" className={styles.face} />
                </a>
                <a href="https://www.instagram.com/saffir_atelierdejoias/" target="_blank">

                    <img src={instagram}  className={styles.face} />
                </a>
                </div>


            </div>





            <div className={styles.dev}>  Ouro Arte Atelier de Joias Ltda
                CNPJ: 30.284.952/0001-45</div>
            <div  className={styles.dev}>   Avenida Pelinca, 100, Loja 66 - Parque Tamandare, Campos dos Goytacazes - RJ, 28.035-053</div>

            <div className={styles.copyright}>
            
                <div>   Desenvolvido Por Samuel Muleu </div>
                <div >Copyright © 2024, todos os direitos reservados.</div>
            </div>

        </div>
    )

}