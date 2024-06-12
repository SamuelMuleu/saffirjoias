import styles from "./AboutUs.module.css";
import lojaFoto from "../assets/local.png"; // Foto da loja
import equipeFoto from "../assets/equipe.png"; // Foto da equipe

export default function AboutUs() {
    return (
        <div className={styles.aboutUs}>
            <div className={styles.intro}>
                <h1>Sobre Nós</h1>
                <p>
                    Fundada em [Ano], a Saffir Joias tem sido um símbolo de elegância e qualidade. Nossa missão é criar peças únicas que celebram os momentos mais importantes da vida.
                </p>
            </div>
            
            <div className={styles.history}>
                <h2>Nossa História</h2>
                <p>
                    Tudo começou quando Paulo Miguel decidiu transformar sua paixão pela joalheria em um negócio. Desde então, temos nos dedicado a oferecer as mais belas joias, feitas com os melhores materiais e um cuidado excepcional.
                </p>
                <img src={lojaFoto} alt="Saffir Joias"title="Saffir Joias" />
            </div>
            
            <div className={styles.values}>
                <h2>Nossos Valores</h2>
                <ul>
                    <li><strong>Qualidade:</strong> Cada peça é feita com atenção aos mínimos detalhes.</li>
                    <li><strong>Confiança:</strong> Construímos relacionamentos duradouros com nossos clientes.</li>
                    <li><strong>Paixão:</strong> Amamos o que fazemos e isso se reflete em nossas joias.</li>
                </ul>
            </div>
            
            <div className={styles.team}>
                <h2>Nosso Time</h2>
                <p>
                    Nossa equipe é composta por artesãos experientes e apaixonados, que trabalham incansavelmente para criar joias que encantam e duram para sempre.
                </p>
                <img src={equipeFoto} alt="Sara,Jonatas,Miguel,Samuel e Michele" title="Sara,Jonatas,Miguel,Samuel e Michele"  />
            </div>
        </div>
    );
}
