import styles from './card.module.css';

export default function Card({ children, h2, texto, ...props}) {
    return(
        <div className={styles.card} {...props}>
            {children}
            <h2>{h2}</h2>
            <p>{texto}</p>
        </div>
    )   
}