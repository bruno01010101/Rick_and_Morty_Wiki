import styles from './detailspagecharacter.module.css';
import axios from 'axios'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router';
import DetailsCard from '../../components/DetailsCard';

export default function DetailsPageCharacter() {

    const [personagem, setPersonagem] = useState();
    const navigate = useNavigate()

    const { id } = useParams()

    useEffect(() => {
        const funcAssincrona = async () => {
            try {
                const url = `https://rickandmortyapi.com/api/character/${id}`;
                const req = await axios.get(url);
                setPersonagem(req.data)
            }
            catch (erro) {
                console.error(erro);
                navigate('/404')
            }
        }

        funcAssincrona()
    }, [id])

    if (personagem) {
        return (
            <DetailsCard>
                <img src={personagem.image} alt="" className={styles.img} />
                <div className={styles.informacoes}>
                    <p>
                        <span className={styles.destaque}>Nome:</span> {personagem.name}
                    </p>
                    <p><span className={styles.destaque}>Espécie: </span> {personagem.species}</p>
                    <p><span className={styles.destaque}>Genêro: </span> {personagem.gender}</p>
                    <p><span className={styles.destaque}>Status: </span> {personagem.status} </p>
                    <p><span className={styles.destaque}>Planeta de origem: </span>{personagem.origin.name}</p>
                </div>
            </DetailsCard>
        )
    }
}