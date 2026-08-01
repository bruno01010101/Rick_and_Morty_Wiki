import { Outlet } from "react-router";
import Aside from "../../components/Aside";
import styles from "./feed.module.css"

export default function Feed() {
    return (
        <div className={styles.div}> 
            <Aside />
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    )
}