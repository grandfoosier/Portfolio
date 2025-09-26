import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import PageWrapper from "../components/PageWrapper";

export default function Hero() {
  return (
    <PageWrapper>
      <main className="container fadeIn">
        <section className={styles.hero}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.title}>Stephen A. Rice</h1>
            <h2 className={styles.subtitle}>
              Software Engineer · Security Enthusiast · Problem Solver
            </h2>
            <p className={styles.tagline}>
              Software engineer with a strong foundation in math, engineering, and systems -
              applying expertise in data, algorithms, and secure development to build reliable,
              impactful solutions. Passionate about leveraging machine learning and AI to turn
              complex data into actionable insights.
            </p>

            <div className={styles.cta}>
              <a href="/projects" className={styles.button}>
                View My Work
              </a>
              <a href="/contact" className={styles.buttonSecondary}>
                Get in Touch
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </PageWrapper>
  );
}
