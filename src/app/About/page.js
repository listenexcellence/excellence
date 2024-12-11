import styles from "../page.module.css";
import "../css/index.css";
import Nav from "../component/Nav";

export default function About() {
  return (
    <div className={styles.page}>
      <Nav />
      <h1>About Me</h1>
    </div>
  );
}
