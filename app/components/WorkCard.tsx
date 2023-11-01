import styles from "../styles/modules/workcard.module.css";
import { workcard } from "../types/workcard";
export default function WorkCard(props: workcard) {
  return (
    <div className={styles.card}>
    <figure className={styles.project_img}>
      <img src={props.img} alt="" />
    </figure>
    <div className={styles.details}>
      <h1 className={styles.project_name}>{props.projectname}</h1>
      <div className={styles.content}>
        <p className={styles.project_type}>Type: <span>{props.type}</span></p>
        <div className={styles.tags}>
          {props.tags.map((tag, index) => (
          <p className={styles.tag}>{tag}</p>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
}
