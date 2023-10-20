import styles from "../styles/modules/works.module.css";
import WorkCard from "./WorkCard";
export default function Works() {
  return (
    <div className={styles.cardcontainer}>
     <WorkCard></WorkCard>
     <WorkCard></WorkCard>
     <WorkCard></WorkCard>
    </div>
  );
}
