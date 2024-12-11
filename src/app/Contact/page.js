import React from 'react';
import styles from "../page.module.css";
import Nav from "../component/Nav";

function page() {
  return (
    <div className={styles.page}>
      <Nav />
      <h1>Contact Me</h1>
    </div>
  )
}

export default page