import styles from './element.module.css'

export default function Elements({children}){
    return(
        <div className={styles.elements}>
            {children}
        </div>
    )
}