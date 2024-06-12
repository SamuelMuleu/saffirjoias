import CookieConsent from "react-cookie-consent";
import styles from './Cookies.module.css';
const Cookies = () => {
    return (
        <div>
            <CookieConsent
                location="bottom"
                buttonText="Aceitar Todos Os Cookies"
                cookieName="myAwesomeCookieName2"
                enableDeclineButton
                declineButtonText="Rejeitar Todos"
                containerClasses={styles.cookieConsentContainer}
                buttonClasses={styles.buttonClasses}
                disableStyles={true}
                declineButtonClasses={styles.declineButtonClasses}

            >Ao clicar em "Aceitar todos os cookies", concorda com o armazenamento de cookies no seu dispositivo para melhorar a navegação no site, analisar a utilização do site e ajudar nas nossas iniciativas de marketing. <a href="/faleconosco" className={styles.link}>Veja Nossas Definiçôes de Cookies</a>
            </CookieConsent>
        </div>
    )
}

export default Cookies
