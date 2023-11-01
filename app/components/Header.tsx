import Menu from "./Menu";
import styles from '../styles/modules/header.module.css'

export default function Header () {
    return (
        <header className={styles.header}>
            <figure>
                <img src="/images/logo.svg" alt="Logo" />
            </figure>
            <Menu></Menu>
        </header>
    )
}