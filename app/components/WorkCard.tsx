import styles from "../styles/modules/workcard.module.css";
export default function WorkCard() {
  return (
    <div className={styles.card}>
    <figure className={styles.project_img}>
      <img src="/images/overlore.png" alt="" />
    </figure>
    <div className={styles.details}>
      <h1 className={styles.project_name}>[new] OVERLORE</h1>
      <div className={styles.content}>
        <p className={styles.project_type}>Type:</p>
        <div className={styles.tags}>
          <p className={styles.tag}>React</p>
          <p className={styles.tag}>HTML</p>
          <p className={styles.tag}>SCSS</p>
        </div>
      </div>
    </div>
  </div>
  );
}
