import { site } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function Access() {
  return (
    <section className="section access" id="access">
      <span className="v-label" aria-hidden="true">案内 — Access</span>

      <Reveal className="access__head">
        <p className="section__eyebrow">アクセス・ご利用案内 / Access</p>
        <h2 className="section__title">ご案内</h2>
      </Reveal>

      <div className="access__grid">
        <Reveal className="access__info">
          <dl className="access__dl">
            <div>
              <dt>所在地 <span lang="en">Address</span></dt>
              <dd>
                〒{site.address.postalCode}　{site.address.full}
                <br />
                <span className="access__en" lang="en">{site.address.en}</span>
              </dd>
            </div>
            <div>
              <dt>電話 <span lang="en">Phone</span></dt>
              <dd>
                <a href={`tel:${site.tel.replace(/[^0-9]/g, "")}`}>{site.telIntl}</a>
              </dd>
            </div>
            <div>
              <dt>メール <span lang="en">Email</span></dt>
              <dd><a href={`mailto:${site.email}`}>{site.email}</a></dd>
            </div>
            <div>
              <dt>営業時間 <span lang="en">Hours</span></dt>
              <dd>
                {site.hours.map((h, i) => (
                  <span className="access__hour" key={i}>
                    <span>{h.label}</span>
                    <span>{h.time}</span>
                  </span>
                ))}
              </dd>
            </div>
          </dl>

          <ul className="access__facts">
            {site.info.map((f, i) => (
              <li key={i}>
                <span className="access__facts-k">{f.k}</span>
                <span className="access__facts-v">{f.v}</span>
              </li>
            ))}
          </ul>

          <div className="access__actions">
            <a className="btn" href={site.mapLink} target="_blank" rel="noopener noreferrer">
              Googleマップで見る
            </a>
            {site.sns.instagram ? (
              <a className="btn btn--ghost" href={site.sns.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            ) : null}
          </div>
        </Reveal>

        <Reveal className="access__map" delay={120}>
          <iframe
            src={site.mapEmbedSrc}
            title={`${site.name}の地図`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </Reveal>
      </div>
    </section>
  );
}
