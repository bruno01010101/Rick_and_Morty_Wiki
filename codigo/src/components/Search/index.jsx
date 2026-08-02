import styles from './search.module.css';
import { FaSearch } from "react-icons/fa";

export default function Search({placeholder}) {
    return(
        <div className={styles.search}>
            <FaSearch />
            <input type="text" placeholder={placeholder} />
        </div>
    )   
}