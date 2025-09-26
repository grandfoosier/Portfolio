import styles from "./Resume.module.css";
import PageWrapper from "../components/PageWrapper";

export default function Resume() {
  return (
    <PageWrapper>
      <main className="container fadeIn">
        <div className={styles.resumeContainer}>
          <h1>Resume</h1>
          <iframe
            src="/Rice_Resume.pdf"
            className={styles.resumeViewer}
            title="Stephen Rice Resume"
          ></iframe>
          <a href="/Rice_Resume.pdf" download className={styles.downloadLink}>
            Download Resume (PDF)
          </a>
        </div>
      </main>
    </PageWrapper>
  );
}
