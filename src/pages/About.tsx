import PageWrapper from "../components/PageWrapper";

export default function About() {
  return (
    <PageWrapper>
      <main className="container fadeIn">
        <section style={{ padding: "4rem 0" }}>
          <h1>About Me</h1>
          <p>
            I'm Stephen A. Rice, a software engineer with a passion for building
            impactful systems, secure applications, and polished user experiences.
            My professional work spans React, TypeScript, Rust, Go, C#, C++, Python, 
            and modern cloud infrastructure.
          </p>
          <p>
            I have a deep focus on <strong>software security</strong> — ensuring
            that the systems I build are not only functional and performant, but
            also resilient against vulnerabilities and misuse. I believe secure
            design is essential in today's connected, data-driven world, and I
            apply security-conscious practices across the development lifecycle.
          </p>
          <p>
            I also have a strong background in <strong>machine learning and
            artificial intelligence</strong>, developed during my master's program.
            My studies explored language models, neural networks, and
            real-world applications of ML/AI in solving complex problems. I see ML
            and AI not only as technical tools, but as transformative approaches
            for turning data into insight, automation, and smarter decision-making.
          </p>
          <p>
            My journey into software engineering is shaped by diverse academic
            backgrounds in <strong>nuclear engineering</strong> and
            <strong>actuarial mathematics</strong>. Nuclear engineering trained me
            to think critically about safety, risk, and complex system behavior,
            while actuarial mathematics honed my skills in statistical modeling,
            probability, and quantitative analysis. Together, these disciplines
            gave me an analytical foundation that continues to shape how I approach
            engineering challenges: systematically, with an eye for detail, and
            with a constant awareness of potential edge cases.
          </p>
          <p>
            When I'm not coding, I enjoy exploring new technologies and finding 
            ways to bring cross-disciplinary insights into software development.
            Whether optimizing algorithms, designing APIs, applying ML techniques,
            or modernizing legacy systems, I strive to build solutions that are 
            secure, polished, and impactful.
          </p>
        </section>
      </main>
    </PageWrapper>
  );
}
