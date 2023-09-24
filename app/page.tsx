import Image from 'next/image'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="{styles.description}">
          <p>Pas de description</p>
      </div>
    </main>
  )
}
