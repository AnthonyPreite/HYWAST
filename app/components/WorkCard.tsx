"use client"

import { useState } from "react";
import styles from "../styles/modules/workcard.module.css";
import { workcard } from "../types/workcard";
export default function WorkCard(props: workcard) {

  const [getSlide, setSlide] = useState(false);

  return (
    <div className={styles.card}>
      <figure className={styles.project_img}>
        <img src={props.img} alt="" />
      </figure>
      <div className={styles.details}>
        <h1 className={styles.project_name}>{props.projectname}</h1>
        <div className={styles.content}>
          <div className={styles.slide}>
            <p className={styles.project_type}>Type: <span>{props.type}</span></p>
            <div className={styles.tags} id={`${props.projectname}_slide_1`}>
              {props.tags.map((tag, index) => (
                <p className={styles.tag}>{tag}</p>
              ))}
            </div>
          </div>

          <div className={styles.slide} id={`${props.projectname}_slide_2`}>
            <a
              href={`#${props.projectname}_slide_${getSlide ? "2" : "1"}`}
              onClick={() => setSlide(!getSlide)}
              className={`${getSlide ? styles.slide_buttonL : styles.slide_buttonR}`}
            ></a>

            {props.description}
          </div>
        </div>
      </div>
    </div>
  );
}
