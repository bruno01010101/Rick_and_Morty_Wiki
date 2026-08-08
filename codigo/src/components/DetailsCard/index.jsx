import styles from "./detais.module.css";

export default function DetailsCard({children}){
    return(
        <div className={styles.main}>
            {children}
        </div>
    )
}