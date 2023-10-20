import styles from '../styles/modules/intro.module.css'
export default function Intro () {
    return (
        <div className={styles.intro}>
            <figure className={styles.tagline}>
                <img src="/images/tagline.svg" alt="tagline" />
            </figure>
            <figure className={styles.brain}>
                <img src="/images/brain.svg" alt="brain" />
            </figure>
            <figure className={styles.arrow}>
                <img src="/images/arrow.svg" alt="brain" />
            </figure>
        </div>
    )
}