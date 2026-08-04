import styles from './detailspage.module.css';
import axios from 'axios'
import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import img from "../../assets/capa.jpg";

export default function DetailsPage() {

    const [episodio, setEpisodio] = useState({});
    const { name } = useParams()
    

    function formatarData(data) {
        return new Date(data).toLocaleDateString("pt-BR")
    }


    useEffect(() => {
        const funcAssincrona = async () => {
            try {
                const url = `https://rickandmortyapi.com/api/episode?name=${name}`;
                const req = await axios.get(url);
                setEpisodio(req.data.results[0])
            }
            catch (erro) {
                console.error(erro);
            }
        }

        funcAssincrona()
    }, [name])

    return (
        <div className={styles.main}>
            <div>
                <img src={img} alt="" className={styles.img} />
            </div>
            <div className={styles.informacoes}>
                <h1>
                    Episódio: {episodio.episode}
                </h1>
                <h2>nome: {episodio.name}</h2>
                <p>Data de lançamento: {formatarData(episodio.air_date)}</p>
                <p>Lista de personagens que aparecem: </p>
            </div>
            <ul className={styles.personagens}>
                <li>teste</li>
            </ul>
            <ul className={styles.personagens}>
                <li>teste 2</li>
            </ul>
        </div>
    )
}