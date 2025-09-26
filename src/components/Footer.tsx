import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a
          className={styles.link}
          href="mailto:rice.steve@gmail.com"
        >
          Email
        </a>
        <a
          className={styles.link}
          href="tel:+18106239871"
        >
          Phone
        </a>
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/stephen-a-rice"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className={styles.link}
          href="https://github.com/grandfoosier"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className={styles.link}
          href="https://twitter.com/striceattack"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </div>
      <div>© {new Date().getFullYear()} Stephen A. Rice. All rights reserved.</div>
    </footer>
  );
}
