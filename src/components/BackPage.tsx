import styles from "./BackPage.module.css"
import { ArrowFatLeft } from "@phosphor-icons/react"
import { Link } from "react-router-dom";


const BackPage = () => {
    return (
        <div className={styles.back}>
            <Link className={styles.back} to={"/"}> <ArrowFatLeft />Voltar</Link>
        </div>
    )
}

export default BackPage;
