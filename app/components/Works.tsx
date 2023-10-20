import works_styles from "../styles/modules/works.module.css";
import module_styles from "../styles/modules/module.module.css";
import WorkCard from "./WorkCard";
export default function Works() {
  return (
    <div className={module_styles.module}>
      <header className={module_styles.header}>
        <h2>Works.</h2>
      </header>
      <div className={works_styles.cardcontainer}>
        <WorkCard></WorkCard>
        <WorkCard></WorkCard>
        <WorkCard></WorkCard>
      </div>
    </div>
  );
}
