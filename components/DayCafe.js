import { site } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function DayCafe() {
  const { day } = site;
  return (
    <section className="section day" id="day">
      <span className="v-label" aria-hidden="true">昼 — Café</span>

      <Reveal className="day__head">
        <p className="section__eyebrow">昼 / 10:00 – 18:00</p>
        <h2 className="section__title">昼は、抹茶とともに。</h2>
        <p className="section__lead">{day.lead}</p>
        <p className="section__lead-en" lang="en">{day.leadEn}</p>
      </Reveal>

      <div className="cards">
        {day.features.map((f, i) => (
          <Reveal as="article" className="card" key={f.k} delay={i * 100}>
            <span className="card__kicker">{f.k}</span>
            <h3 className="card__title">{f.title}</h3>
            <p className="card__body">{f.body}</p>
          </Reveal>
        ))}
      </div>

      <img className="photo-band" src="/day.jpg" alt="昼のドリンク" loading="lazy" />

      <Reveal className="recommend">
        <span className="recommend__label">こんな方に</span>
        <span className="recommend__text">{day.recommend}</span>
        <span className="recommend__en" lang="en">{day.recommendEn}</span>
      </Reveal>
    </section>
  );
}
