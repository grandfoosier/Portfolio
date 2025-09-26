import styles from "./Skills.module.css";
import PageWrapper from "../components/PageWrapper";

const skills = {
  Languages: ["Rust", "Go", "Python", "C#", "C++", "Java", "JavaScript", "TypeScript", "SQL"],
  Communications: ["gRPC", "REST", "GraphQL", "MQTT", "WebSockets"],
  Frameworks: ["React", "ASP.NET Core", "Node.js", "WebAssembly", "PyTorch"],
  Cloud: ["AWS", "GCP", "Docker", "Kubernetes"],
  Tools: ["Git", "Linux", "Swagger", "Vite", "Azure DevOps", "Visual Studio", "VS Code", "Coding Assistants"],
  Practices: ["Secure Development", "Agile/Scrum", "BDD/TDD", "CI/CD", "Object-Oriented Design", "Service-Based Architecture"],
  Focuses: ["Streaming Data", "Embedded Systems", "Web Development", "Application Security", "Mathematical Analysis", "Data Visualization", "Machine Learning"],
};

export default function Skills() {
  return (
    <PageWrapper>
      <main className="container fadeIn">
        <section className={styles.skills}>
          <h1 className={styles.title}>Skills</h1>
          <div className={styles.grid}>
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className={styles.card}>
                <h2 className={styles.category}>{category}</h2>
                <div className={styles.badges}>
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className={`${styles.badge} 
                        ${category === "Cloud" ? styles.cloud : ""} 
                        ${category === "Tools" ? styles.tool : ""}
                        ${category === "Practices" ? styles.practice : ""} 
                        ${category === "Focuses" ? styles.focus : ""}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}

// export default function Skills() {
//   return (
//     <PageWrapper>
//       <main className="container fadeIn">
//         <section style={{ padding: "4rem 0" }}>
//           <h1>Skills</h1>
//           <div className={styles.skillsGrid}>
//             {skills.map((skill) => (
//               <div key={skill.category} className={styles.card}>
//                 <h2>{skill.category}</h2>
//                 <ul>
//                   {skill.items.map((item) => (
//                     <li key={item}>{item}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>
//     </PageWrapper>
//   );
// }
