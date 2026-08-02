import styles from "./episodes.module.css";
import img from "../../assets/capa.jpg";
import Card from "../Card";
import Search from "../Search";

export default function Episodes() {
    return (
        <div className={styles.episodios}>
            <Search placeholder='Pesquise pelo título do episódio que você deseja encontrar' />
            <div className={styles.elementos}>
                <Card texto='algumas informações bacanas sobre o episódio, vamos olha que bacana' h2='Titulo bem bacana'>
                    <img src={img} alt="imagem de um episódio de rick and morty" />
                </Card>
                <Card texto='algumas informações bacanas sobre o episódio, vamos olha que bacana' h2='Titulo bem bacana'>
                    <img src={img} alt="imagem de um episódio de rick and morty" />
                </Card>
                <Card texto='algumas informações bacanas sobre o episódio, vamos olha que bacana' h2='Titulo bem bacana'>
                    <img src={img} alt="imagem de um episódio de rick and morty" />
                </Card>
                <Card texto='algumas informações bacanas sobre o episódio, vamos olha que bacana' h2='Titulo bem bacana'>
                    <img src={img} alt="imagem de um episódio de rick and morty" />
                </Card>
                <Card texto='algumas informações bacanas sobre o episódio, vamos olha que bacana' h2='Titulo bem bacana'>
                    <img src={img} alt="imagem de um episódio de rick and morty" />
                </Card>
                <Card texto='algumas informações bacanas sobre o episódio, vamos olha que bacana' h2='Titulo bem bacana'>
                    <img src={img} alt="imagem de um episódio de rick and morty" />
                </Card>
                <Card texto='algumas informações bacanas sobre o episódio, vamos olha que bacana' h2='Titulo bem bacana'>
                    <img src={img} alt="imagem de um episódio de rick and morty" />
                </Card>
                <Card texto='algumas informações bacanas sobre o episódio, vamos olha que bacana' h2='Titulo bem bacana'>
                    <img src={img} alt="imagem de um episódio de rick and morty" />
                </Card>
            </div>
          
        </div>
    )
}