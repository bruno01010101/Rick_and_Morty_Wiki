import styles from './aside.module.css';
import logo from "../../assets/Rick-and-Morty.png";
import { Link } from 'react-router';

export default function Aside() {
    return (
        <aside className={styles.aside}>
            <img src={logo} alt="" className={styles.img} />
            <p className={styles.p}>Seja bem vindo ao Rick and MortyPedia, site que possuí todas as informações sobre rick and morty.
                Na verdade, não possui todas as informações porra nenhuma só to criando isso porque quero aprender react
                e esse projeto me proporciona consumir api, construir layouts, reutilizar componentes, organizar o projeto e escrever
                muito código na prática. Não que eu não seja um fã, mas não é o meu objetivo principal, enfim aproveite as funcionalidades!
            </p>
            <p className={styles.links}>
                <Link to='/'>
                    Lista de episódios
                </Link>

                <Link to='/characters'>
                    Lista de personagens
                </Link>

                <Link to='/'>
                    Lista de locais
                </Link>
            </p>
        </aside>
    )
}