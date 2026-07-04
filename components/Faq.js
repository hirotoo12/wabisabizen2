import { site } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function Faq() {
  return (
    <section className="section faq" id="faq">
      <span className="v-label" aria-hidden="true">問 — FAQ</span>

      <Reveal className="faq__head">
        <p className="section__eyebrow">よくあるご質問 / FAQ</p>
        <h2 className="section__title">おたずね。</h2>
      </Reveal>

      <div className="faq__list">
        {site.faq.map((f, i) => (
          <Reveal as="details" className="faq__item" key={i} delay={i * 60}>
            <summary className="faq__q">
              <span>{f.q}</span>
              <span className="faq__q-en" lang="en">{f.qEn}</span>
              <span className="faq__mark" aria-hidden="true" />
            </summary>
            <div className="faq__a">
              <p>{f.a}</p>
              <p className="faq__a-en" lang="en">{f.aEn}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
