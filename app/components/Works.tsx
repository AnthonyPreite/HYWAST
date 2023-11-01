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
        <WorkCard projectname={"Overlore"} type={"Website"} tags={["HTML","SCSS","REACT"]} url={"Overlore.fr"} img={"/images/overlore.png"} description={"ceci est une description"}></WorkCard>

        <WorkCard projectname={"Overlore2"} type={"Website"} tags={["HTML","SCSS","REACT"]} url={"Overlore.fr"} img={"/images/overlore.png"} description={"ceci est une description. ceci est une description magique et télurique"}></WorkCard>

        <WorkCard projectname={"Overlore3"} type={"Website"} tags={["HTML","SCSS","REACT"]} url={"Overlore.fr"} img={"/images/overlore.png"} description={"ceci est une description"}></WorkCard>
      </div>
    </div>
  );
}
