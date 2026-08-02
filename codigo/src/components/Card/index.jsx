import styles from './card.module.css';

export default function Card({ children, h2, texto }) {
    return(
        <div className={styles.card}>
            {children}
            <h2>{h2}</h2>
            <p>{texto}</p>
        </div>
    )   
}