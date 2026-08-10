import styles from "./notfound.module.css";
import { Link} from "react-router";

export default function NotFound(){
    return(
        <div className={styles.main}>
            <div className={styles.div}>
                <h1 className={styles.span}>404 — Página não encontrada</h1>
                <h2>Ops! Parece que você se <span className={styles.span}>perdeu</span> no caminho.</h2>
                <p>A página que você está procurando <span className={styles.span}>não existe</span>, foi movida ou o endereço pode estar incorreto. </p>
                <p>Que tal voltar para a <Link to="/" className={styles.link}><span className={styles.span}>página inicial</span> </Link>e tentar novamente?</p>
            </div>
        </div>
    )
}