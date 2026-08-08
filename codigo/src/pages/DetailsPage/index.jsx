import styles from './detailspage.module.css';
import axios from 'axios'
import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import img from "../../assets/capa.jpg";
import DetailsCard from '../../components/DetailsCard';

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
        <DetailsCard className={styles.main}>
                <img src={img} alt="" className={styles.img} />
            <div className={styles.informacoes}>
                <p><span className={styles.destaque}>Episódio:</span> {episodio.episode}</p>
                <p><span className={styles.destaque}>nome:</span> {episodio.name}</p>
                <p><span className={styles.destaque}>Data de lançamento:</span> {formatarData(episodio.air_date)}</p>
                <p>Lista de personagens que aparecem: </p>
            </div>
        </DetailsCard>
    )
}