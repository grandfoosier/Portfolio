import styles from "./Projects.module.css";
import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";
import { scrollVariants } from "./Variants";

export default function Projects() {
  const projects = [
    {
      title: "UltraPro2",
      description: `
        A complete modernization of Promess's flagship manufacturing control system.
        I led front-end development using React and TypeScript and contributed to Rust-based
        backend services. Designed a scalable, modular architecture that could support
        future expansion and integrations.
      `,
      impact: `
        Forecasted to generate over $100M in additional company revenue by enabling
        a new deployment and licensing model. Positioned as a cornerstone for Promess's
        next decade of growth.
      `,
    },
    {
      title: "UltraPro (Legacy Modernization)",
      description: `
        Enhanced and maintained the legacy UltraPro platform, a mission-critical manufacturing
        control system. Introduced new features, resolved critical defects, and improved performance
        through targeted code refactoring and optimizations.
      `,
      impact: `
        Sustained millions in recurring revenue while providing the foundation for
        transitioning customers to UltraPro2. Extended product life cycle and stabilized
        production for existing clients.
      `,
    },
    {
      title: "Workflow Director",
      description: `
        Designed and implemented a barcode-driven web microservice used on manufacturing
        floors. Built with Go and MQTT for real-time data processing and deployed with
        Docker and Kubernetes to ensure high availability and scalability.
      `,
      impact: `
        Directly contributed to multi-million-dollar sales contracts by enabling
        faster, more reliable production workflows that became a key differentiator
        for Promess customers.
      `,
    },
    {
      title: "Data Utility Optimization",
      description: `
        Expanded and optimized a manufacturing data analysis suite by redesigning
        SQL queries and refactoring backend services. Worked closely with engineers
        to identify performance bottlenecks in critical production systems.
      `,
      impact: `
        Reduced data load times from several minutes to under one second, dramatically
        improving engineers' workflows and boosting customer satisfaction.
      `,
    },
    {
      title: "Connector API Servers",
      description: `
        Took full ownership of developing Linux-based gRPC servers to interface with
        Promess press controllers. Managed requirements gathering, system design,
        implementation, and release.
      `,
      impact: `
        Enabled Promess to secure contracts worth millions of dollars by providing
        customers with a scalable, reliable integration solution for automated
        manufacturing systems.
      `,
    },
    {
      title: "BDD/TDD Automation Framework",
      description: `
        Developed a comprehensive test automation framework using Behavior-Driven Development
        (BDD) and Test-Driven Development (TDD) practices. Integrated testing tools with
        existing CI/CD pipelines to improve software quality and developer productivity.
      `,
      impact: `
        Improved defect detection rate, reduced regression testing time, and increased
        developer confidence in production releases. Enhanced long-term maintainability
        by embedding tests into the development workflow.
      `,
    },
    {
      title: "Punctuation Prediction Model",
      description: `
        Developed a transformer-based large language model trained on text data
        to predict punctuation placement. Used PyTorch for training and deployed
        pipelines on Google Cloud and AWS for scalability.
      `,
      impact: `
        Demonstrated expertise in natural language processing and cloud infrastructure,
        delivering a model with measurable improvements in punctuation restoration
        accuracy over baseline approaches.
      `,
    },
    {
      title: "Portfolio Website",
      description: `
        This personal site, built with React + TypeScript and CSS Modules, showcases
        my work, skills, and career timeline in a modern, polished format. Includes
        animations, responsive design, and accessible layouts.
      `,
      impact: `
        A professional hub for recruiters and collaborators to explore my background,
        skills, and projects in one place.
      `,
    },
  ];

  return (
    <PageWrapper>
      <main className="container fadeIn">
        <section style={{ padding: "4rem 0" }}>
          <h1>Projects</h1>
          <ul style={{ display: "grid", gap: "2rem", padding: 0 }}>
            {projects.map((proj, idx) => (
              <motion.div
                key={idx}
                variants={scrollVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: idx * 0.15 }} // stagger
              >
                <motion.div
                  className={styles.card}
                  whileHover={{
                    y: -6,
                    transition: { duration: 0.2, ease: "easeOut" }, // 👈 hover stays snappy
                  }}
                  style={{
                    padding: "1.5rem",
                    borderRadius: "0.5rem",
                    background: "var(--card-bg)",
                    boxShadow: `0 2px 8px var(--card-shadow)`,
                  }}
                >
                  <h2>{proj.title}</h2>
                  <p>{proj.description}</p>
                  <p
                    style={{
                      fontStyle: "italic",
                      color: "var(--text)",
                      marginTop: "0.5rem",
                    }}
                  >
                    <strong>Impact:</strong> {proj.impact}
                  </p>
                </motion.div>
              </motion.div>

              // <li
              //   key={proj.title}
              //   style={{
              //     padding: "1.5rem",
              //     borderRadius: "0.5rem",
              //     background: "var(--card-bg)",
              //     boxShadow: `0 2px 8px var(--card-shadow)`,
              //   }}
              //   className={styles.card}
              // >
              //   <h2>{proj.title}</h2>
              //   <p>{proj.description}</p>
              //   <p
              //     style={{
              //       fontStyle: "italic",
              //       color: "var(--text)",
              //       marginTop: "0.5rem",
              //     }}
              //   >
              //     <strong>Impact:</strong> {proj.impact}
              //   </p>
              // </li>
            ))}
          </ul>
        </section>
      </main>
    </PageWrapper>
  );
}
