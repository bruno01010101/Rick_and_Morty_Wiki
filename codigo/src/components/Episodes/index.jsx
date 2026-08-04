import styles from "./episodes.module.css";
import img from "../../assets/capa.jpg";
import Card from "../Card";
import Search from "../Search";
import axios from 'axios'
import { useEffect, useState} from "react";
import { useNavigate } from "react-router";

export default function Episodes() {
    const [episodios, setEpisodios] = useState([]);
    const navigate = useNavigate()

    async function requisicao(num) {
        try {
            const req = await axios.get(`https://rickandmortyapi.com/api/episode?page=${num}`);
            setEpisodios(req.data.results)
        }
        catch (erro) {
            console.error(erro);
        }
    }

    useEffect(() => {
        const funcAssincrona = async () => {
            requisicao(1)
        }

        funcAssincrona()
    }, [])

    return (
        <div className={styles.episodios}>
            <Search placeholder='Pesquise pelo título do episódio que você deseja encontrar' />
            <div className={styles.elementos}>
                {
                    episodios.map(((e) => (
                        <Card texto={e.name} h2={e.episode} key={e.id} onClick={() => navigate(`episode/${e.name}`)}>
                            <img src={img} alt="imagem de um episódio de rick and morty" />
                        </Card>
                    )))
                }
            </div>
            <div className={styles.paginas}>
                <button onClick={() => requisicao(1)}>1</button>
                <button onClick={() => requisicao(2)}>2</button>
                <button onClick={() => requisicao(3)}>3</button>
            </div>
        </div>
    )
}