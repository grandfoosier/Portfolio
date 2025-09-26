import styles from "./Timeline.module.css";
import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";
import { scrollVariants } from "./Variants";

const timelineItems = [
  {
    date: "2021 - 2025",
    title: "Software Developer, Promess Inc.",
    type: "work",
    description:
      "Led and contributed to development of IoT, desktop, and web applications. Key projects included UltraPro2, Workflow Director, and gRPC Connector API servers.",
  },
  {
    date: "2019 - 2020",
    title: "Graduate Assistant, Eastern Michigan University",
    type: "work",
    description:
      "Developed multi-threaded web scrapers and syntax analyzers for NLP research. Tutored Java/Python and assisted in applied cryptography courses.",
  },
  {
    title: "MS in Computer Science, Eastern Michigan University",
    type: "education",
    description:
      "Coursework in algorithms, parallel processing, networking, and AI/ML. Thesis: trained a large language model for punctuation prediction (PyTorch, GCP, AWS).",
  },
  {
    date: "2014 - 2016",
    title: "Actuarial Associate (Consulting)",
    type: "work",
    description: "Performed retirement actuarial analysis and reporting, including pension valuations, compliance testing, and financial projections for large corporate clients.",
  },
  {
    title: "BS in Nuclear Engineering, University of Michigan",
    type: "education",
    description:
      "Specialized in nuclear energy systems with strong programming background in C++, Python, and Matlab.",
  },
];

export default function Timeline() {
  return (
    <PageWrapper>
      <main className="container fadeIn">
        <section style={{ padding: "4rem 0" }}>
          <h1>Timeline</h1>
          <div className={styles.timeline}>
            {timelineItems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={scrollVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: idx * 0.15 }} // stagger
              >
                <motion.div
                  className={`${styles.item} ${item.type === "education" ? styles.education : styles.work
                    }`}
                  whileHover={{
                    y: -6,
                    transition: { duration: 0.2, ease: "easeOut" }, // 👈 hover stays snappy
                  }}
                >
                  <div
                    className={`${styles.dot} ${item.type === "work" ? styles.workDot : ""
                      }`}
                  />
                  <div className={styles.date}>{item.date}</div>
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.desc}>{item.description}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}
