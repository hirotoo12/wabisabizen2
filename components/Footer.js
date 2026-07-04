import { site } from "@/lib/site";

const snsLabels = {
  instagram: "Instagram",
  line: "LINE",
  hotpepper: "ホットペッパー",
  tabelog: "食べログ",
};

export default function Footer() {
  const sns = Object.entries(site.sns).filter(([, v]) => v);
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer__mark" aria-hidden="true">円</div>
      <p className="site-footer__name">{site.name}</p>
      <p className="site-footer__romaji">{site.nameRomaji}</p>
      <p className="site-footer__concept" lang="en">{site.concept}</p>

      <div className="site-footer__contact">
        <a href={`tel:${site.tel.replace(/[^0-9]/g, "")}`}>{site.telIntl}</a>
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </div>

      {sns.length ? (
        <nav className="site-footer__sns">
          {sns.map(([k, v]) => (
            <a key={k} href={v} target="_blank" rel="noopener noreferrer">
              {snsLabels[k] || k}
            </a>
          ))}
        </nav>
      ) : null}

      <p className="site-footer__addr">
        {site.address.full}
        <br />
        <span lang="en">{site.address.en}</span>
      </p>
      <p className="site-footer__copy">© {year} {site.name} / {site.nameEn}</p>
    </footer>
  );
}
