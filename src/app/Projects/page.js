import styles from "../page.module.css";
import "../css/index.css";
import Nav from "../component/Nav";

export default function Projects() {
  return (
    <div className={styles.page}>
      <Nav />
      <h1>My Projects</h1>
    </div>
  );
}
