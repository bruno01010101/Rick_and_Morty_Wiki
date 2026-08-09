import { useState } from 'react';
import styles from './search.module.css';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router";

export default function Search({placeholder, type}) {
    const [texto, setTexto] = useState('')
    const navigate = useNavigate()

    const submit = async () => {
        const url = `/${type}/${texto}`
        console.log(url)
        navigate(url)
    }

    function foco(e){
        if(e.key === "Enter"){
            submit();
            console.log(texto)
        }
    }

    return(
        <div className={styles.search} onChange={(v) => setTexto(v.target.value)} onKeyDown={foco}>
            <FaSearch onClick={() => submit()} />
            <input type="text" placeholder={placeholder} />
        </div>
    )   
}

// falta apenas encontrar uma maneira de enviar apertando enter com o input selecionado