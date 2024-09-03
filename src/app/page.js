
import Image from "next/image"
import styles from "./page.module.css"
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <header id="header" className={styles.header}>
        <div>
          <h1>
            <span>
              Hello<span className={styles.yellowText}>.</span>
            </span>
            <br />
            <span>
              <span>I am</span>
            </span>
            <br />
            <span>Chepe Ordoñez</span>
          </h1>
        </div>
      </header>
      <section id="info" className={styles.infoSection}>
        <img
          src="/imagen-para-website.png"
          alt="Imagen"
          className={styles.images}
        />
        <div className={styles.infoContainer}>
          <span className={styles.tittle + " " + styles.yellowText}>Chepe</span>
          <br />
          <span className={styles.tittle}>Ordoñez</span>
          <div className={styles.list}>
            <ul>
              <li>
                <span className={styles.grayText}>Age:</span>27
              </li>
              <li>
                <span className={styles.grayText}>Nationality: </span>German
              </li>
              <li>
                <span className={styles.grayText}>Skill set :</span> Project Managment and Finalcial Performance
              </li>
              <li>
                <span className={styles.grayText}>Languages: </span>English, German
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

