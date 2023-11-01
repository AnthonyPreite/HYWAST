"use client"
import { useState } from 'react'
import styles from '../styles/modules/menu.module.css'
import { get } from 'http'
export default function Menu() {

    const [getOpened, setOpened] = useState(false)

    return (
        <div className={styles.navbar}>
        <div className={styles.header}>
          <button className={styles.toggle} onClick={()=>setOpened(!getOpened)}>&#9776;</button>
          
        </div>
        {getOpened && (
        <div className={styles.links} id={"styles.links"}>
          <a href="#home">Works.</a>
          <a href="#about">About.</a>
          <a href="#contact">Contact.</a>
        </div>
        )}
      </div>
    )
}