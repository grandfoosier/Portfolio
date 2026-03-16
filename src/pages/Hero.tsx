import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import PageWrapper from "../components/PageWrapper";
import { NavLink } from "react-router-dom";

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
              Software engineer specializing in backend and systems development.
            </h2>
            <p className={styles.tagline}>
              I build reliable services using Rust,Go, and C#, with experience in event-driven architectures, real-time systems, and hardware-integrated APIs.
              My work focuses on concurrency safety, observability, and production-grade system design.
            </p>

            <div className={styles.cta}>
              <NavLink to="/projects" className={styles.button}>
                {"View My Work"}
              </NavLink>
              <NavLink to="/contact" className={styles.buttonSecondary}>
                {"Get in Touch"}
              </NavLink>
            </div>
          </motion.div>
        </section>
      </main>
    </PageWrapper>
  );
}
