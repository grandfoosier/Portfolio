import PageWrapper from "../components/PageWrapper";

export default function About() {
  return (
    <PageWrapper>
      <main className="container fadeIn">
        <section style={{ padding: "4rem 0" }}>
          <h1>About Me</h1>
          <p>
            I'm Stephen A. Rice, a software engineer with a passion for building
            scalable systems, secure applications, and polished user experiences.
            My professional work spans React, TypeScript, Rust, Go, and modern
            cloud infrastructure.
          </p>
          <p>
            I have a deep interest in <strong>software security</strong> -
            ensuring that the systems I build are not only functional and
            performant, but also resilient against vulnerabilities and misuse.
            This focus stems from my belief that secure design is essential in
            today's connected, data-driven world.
          </p>
          <p>
            My journey into software engineering is shaped by diverse academic
            backgrounds in <strong>nuclear engineering</strong> and{" "}
            <strong>actuarial mathematics</strong>. Nuclear engineering trained me
            to think critically about safety, risk, and complex system behavior,
            while actuarial mathematics honed my skills in statistical modeling,
            probability, and quantitative analysis. Both disciplines contribute to
            the way I approach engineering challenges: systematically, with an eye
            for detail, and with a constant awareness of potential edge cases.
          </p>
          <p>
            When I'm not coding, I enjoy exploring new technologies, studying
            security practices, and finding ways to bring cross-disciplinary
            insights into software development. Whether optimizing algorithms,
            designing APIs, or modernizing legacy systems, I strive to build
            solutions that are secure, scalable, and impactful.
          </p>
        </section>
      </main>
    </PageWrapper>
  );
}
