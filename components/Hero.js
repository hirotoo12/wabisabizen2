import { site } from "@/lib/site";
import Enso from "@/components/Enso";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__enso" aria-hidden="true">
        <Enso draw />
      </div>

      <div className="hero__inner">
        {site.openBadge ? (
          <span className="hero__badge">{site.openBadge}</span>
        ) : null}
        <p className="hero__eyebrow">{site.concept}</p>
        <h1 className="hero__title">
          <span className="hero__title-ja">{site.name}</span>
          <span className="hero__title-romaji">{site.nameRomaji}</span>
        </h1>
        <p className="hero__tagline">{site.tagline}</p>
        <p className="hero__sub">{site.subTagline}</p>
        <p className="hero__en" lang="en">{site.heroEn}</p>
      </div>

      <a href="#about" className="hero__scroll" aria-label="下へ">
        <span className="hero__scroll-line" />
      </a>
    </section>
  );
}
