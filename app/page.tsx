import Image from 'next/image'
import styles from './styles/modules/page.module.css'
import Header from './components/Header'
import Intro from './components/Intro'
import Works from './components/Works'

export default function Home() {
  return (
    
    <main className={styles.main}>
      <Header></Header>
      <Intro></Intro>
      <Works></Works>
      
    </main>
  )
}
