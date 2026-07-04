import { site } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section className="section about" id="about">
      <span className="v-label" aria-hidden="true">序 — About</span>

      <div className="about__grid">
        <Reveal className="about__head">
          <p className="section__eyebrow">侘び寂び禅について</p>
          <h2 className="section__title">
            懐かしいのに、
            <br />
            あたらしい。
          </h2>
          <p className="about__concept" lang="en">{site.concept}</p>
        </Reveal>

        <Reveal className="about__body" delay={120}>
          {site.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p className="about__en" lang="en">{site.aboutEn}</p>

          <ul className="about__why">
            {site.why.map((w, i) => (
              <li key={i}>
                <span className="about__why-ja">{w.ja}</span>
                <span className="about__why-en" lang="en">{w.en}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
