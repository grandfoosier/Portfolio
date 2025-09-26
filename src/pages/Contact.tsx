import styles from "./Contact.module.css";
import PageWrapper from "../components/PageWrapper";

export default function Contact() {
  return (
    <PageWrapper>
      <main className="container fadeIn">
        <section style={{ padding: "4rem 0" }}>
          <h1>Contact</h1>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:rice.steve@gmail.com"
                className={styles.contactLink}
              >
                rice.steve@gmail.com
              </a>
            </li>
            <li className={styles.contactItem}>
              <strong>Phone:</strong>{" "}
              <a href="tel:+18106239871" className={styles.contactLink}>
                (810) 623-9871
              </a>
            </li>
            <li className={styles.contactItem}>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/stephen-a-rice"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                linkedin.com/in/stephen-a-rice
              </a>
            </li>
            <li className={styles.contactItem}>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/grandfoosier"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                github.com/grandfoosier
              </a>
            </li>
            <li className={styles.contactItem}>
              <strong>Twitter:</strong>{" "}
              <a
                href="https://twitter.com/striceattack"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                @striceattack
              </a>
            </li>
          </ul>
        </section>
      </main>
    </PageWrapper>
  );
}
