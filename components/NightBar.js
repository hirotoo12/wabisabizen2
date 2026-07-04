import { site } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function NightBar() {
  const { night } = site;
  return (
    <section className="section night" id="night">
      <span className="v-label v-label--gold" aria-hidden="true">夜 — Bar</span>

      <Reveal className="night__head">
        <p className="section__eyebrow section__eyebrow--gold">夜 / 18:00 – 25:00</p>
        <h2 className="section__title">夜は、昭和レトロに酔う。</h2>
        <p className="section__lead">{night.lead}</p>
        <p className="section__lead-en" lang="en">{night.leadEn}</p>
      </Reveal>

      <div className="cards">
        {night.features.map((f, i) => (
          <Reveal as="article" className="card card--dark" key={f.k} delay={i * 100}>
            <span className="card__kicker card__kicker--gold">{f.k}</span>
            <h3 className="card__title">{f.title}</h3>
            <p className="card__body">{f.body}</p>
          </Reveal>
        ))}
      </div>

      <div
        className="photo-band photo-band--dark"
        style={{ backgroundImage: "url('/night.jpg')" }}
        aria-hidden="true"
      />

      <Reveal className="recommend recommend--dark">
        <span className="recommend__label">こんな方に</span>
        <span className="recommend__text">{night.recommend}</span>
        <span className="recommend__en" lang="en">{night.recommendEn}</span>
      </Reveal>
    </section>
  );
}
