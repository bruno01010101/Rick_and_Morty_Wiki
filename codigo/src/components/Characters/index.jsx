import styles from './characters.module.css';
import Search from "../Search";
import axios from 'axios'
import Card from "../Card";
import { useEffect, useState } from 'react';
import Elements from '../Elements';


export default function Characters() {
    const [personagens, setPersonagens] = useState([])

    useEffect(() => {
        async function assincrona() {
            await requisicao(1);
        }

        assincrona();
    }, [])

    async function requisicao(page) {
        try {
            const req = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
            setPersonagens(req.data.results);
        } catch (e) {
            [
                console.error(e)
            ]
        }
    }

    return (
        <div className={styles.characters}>
            <Search placeholder='Pesquise pelo nome do personagem que você deseja encontrar' />

            <Elements>
                {
                    personagens.map(((e) => (
                        <Card h2={e.name} key={e.id}>
                            <img src={e.image} alt="imagem de um episódio de rick and morty" />
                        </Card>
                    )))
                }
            </Elements>

            <div className={styles.paginas}>
                <button onClick={() => requisicao(1)}>1</button>
                <button onClick={() => requisicao(2)}>2</button>
                <button onClick={() => requisicao(3)}>3</button>
                <button onClick={() => requisicao(4)}>4</button>
                <button onClick={() => requisicao(5)}>5</button>
                <button onClick={() => requisicao(6)}>6</button>
                <button onClick={() => requisicao(7)}>7</button>
                <button onClick={() => requisicao(8)}>8</button>
                <button onClick={() => requisicao(9)}>9</button>
                <button onClick={() => requisicao(10)}>10</button>
                <button onClick={() => requisicao(11)}>11</button>
                <button onClick={() => requisicao(12)}>12</button>
            </div>
        </div>
    )
}