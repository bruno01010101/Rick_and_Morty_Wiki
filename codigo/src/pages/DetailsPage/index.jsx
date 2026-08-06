import styles from './detailspage.module.css';
import axios from 'axios'
import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import img from "../../assets/capa.jpg";

export default function DetailsPage() {

    const [episodio, setEpisodio] = useState({});

    const [lista1, setlista1] = useState([]);
    const [lista2, setlista2] = useState([]);


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

                {
                    req.data.results[0].characters.forEach((e, i) => {
                        if (i <= 18) {
                            if (i % 2 == 0) {
                                setlista1((listaAnterior) => [...listaAnterior, e])
                            } else {
                                setlista2((listaAnterior) => [...listaAnterior, e])
                            }
                        }
                        else{
                            return
                        }
                    })
                }
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
                {
                    lista1.map(((e, i) => (
                        <li key={i}>{e}</li>
                    )))
                }
            </ul>
            <ul className={styles.personagens}>
                {
                    lista2.map(((e, i) => (
                        <li key={i}>{e}</li>
                    )))
                }
            </ul>
        </div>
    )
}