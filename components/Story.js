import { site } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function Story() {
  const { story } = site;
  return (
    <section className="section story" id="story">
      <span className="v-label" aria-hidden="true">由縁 — Story</span>

      <div className="story__grid">
        <Reveal className="story__head">
          <p className="section__eyebrow">この建物のこと</p>
          <h2 className="section__title">
            築八十年の、
            <br />
            町家（Machiya）。
          </h2>
        </Reveal>

        <Reveal className="story__body" delay={120}>
          {story.building.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p className="story__en" lang="en">
            {story.buildingEn}
          </p>
        </Reveal>
      </div>

      <div
        className="photo-band"
        style={{ backgroundImage: "url('/story.jpg')" }}
        aria-hidden="true"
      />

      <div className="story__sig">
        <Reveal className="story__sig-head">
          <p className="section__eyebrow">名物</p>
          <h3 className="story__sig-title">金沢ならではの、味わい。</h3>
        </Reveal>
        <div className="cards">
          {story.signatures.map((s, i) => (
            <Reveal as="article" className="card" key={s.k} delay={i * 100}>
              <span className="card__kicker">{s.k}</span>
              <h4 className="card__title">{s.title}</h4>
              <p className="card__body">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
