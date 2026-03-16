import PageWrapper from "../components/PageWrapper";

export default function About() {
  return (
    <PageWrapper>
      <main className="container fadeIn">
        <section style={{ padding: "4rem 0" }}>
          <h1>About Me</h1>

          <p>
          I'm Stephen Rice, a software engineer focused on backend and systems development.
          I build reliable services and infrastructure using Rust, Go, and C#, with
          experience designing APIs, event-driven systems, and real-time data pipelines.
          </p>

          <p>
          In my professional work I've built backend services that integrate with
          industrial hardware systems, using technologies like gRPC, MQTT, and containerized
          Linux deployments. These systems needed predictable behavior in production,
          which shaped how I approach engineering: careful system design, strong testing,
          and an emphasis on observability and reliability.
          </p>

          <p>
          My background is a bit unusual. I started in engineering and quantitative fields
          before moving fully into software. A degree in nuclear engineering trained me to
          think about safety, risk, and complex system behavior, and my graduate work in
          computer science focused on systems and machine learning.
          </p>

          <p>
          That background continues to influence how I approach software problems today.
          I tend to think about edge cases, failure modes, and system behavior under load.
          I enjoy working on problems involving concurrency, distributed services, and
          software that interacts with the physical world.
          </p>

          <p>
          Outside of work I like exploring new systems technologies and building small
          infrastructure projects to understand how production services behave in practice.
          </p>
        </section>
      </main>
    </PageWrapper>
  );
}
