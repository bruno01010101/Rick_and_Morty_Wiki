import styles from "./episodes.module.css";
import img from "../../assets/capa.jpg";

export default function Episodes() {
    return (
        <div className={styles.episodios}>
            <div className={styles.card}>
                <img src={img} alt="imagem de um episódio de rick and morty" />
                <h2>Titulo do episodio</h2>
                <p>algumas informações bacanas sobre o episódio, vamos olha que bacana</p>
            </div>
        </div>
    )
}