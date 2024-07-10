import styles from "./Error404.module.css";
import { Link } from 'react-router-dom'; 

const Error404 = () => {
  return (
    <div className={styles.container}>
    <h1 className={styles.header}>Oops!</h1>
    <h2 className={styles.subheader}>404</h2>
    <p className={styles.message}>A página que você procura pode ter sido removida, ter seu nome alterado ou estar temporariamente indisponível.</p>
    <Link to="/" className={styles.link}>IR PARA A PÁGINA INICIAL</Link>
  </div>
  )
}

export default Error404