import { site } from "@/lib/site";
import Reveal from "@/components/Reveal";

function Item({ it }) {
  return (
    <li className="menu__item">
      <span className="menu__item-name">
        {it.name}
        {it.nameEn ? <span className="menu__item-en" lang="en">{it.nameEn}</span> : null}
        {it.desc ? <span className="menu__item-desc">{it.desc}</span> : null}
      </span>
      <span className="menu__item-dots" aria-hidden="true" />
      <span className="menu__item-price">{it.price}</span>
    </li>
  );
}

function MenuColumn({ data }) {
  return (
    <div className="menu__col">
      <h3 className="menu__col-title">{data.heading}</h3>
      {data.note ? <p className="menu__col-note">{data.note}</p> : null}

      {data.groups.map((g, gi) => (
        <div className="menu__group" key={gi}>
          {g.title ? (
            <p className="menu__group-title">
              {g.title}
              {g.titleEn ? <span lang="en"> / {g.titleEn}</span> : null}
            </p>
          ) : null}
          <ul className="menu__list">
            {g.items.map((it, i) => (
              <Item it={it} key={i} />
            ))}
          </ul>
        </div>
      ))}

      {data.flavors ? (
        <div className="menu__flavors">
          <p className="menu__flavors-label">{data.flavorsLabel}</p>
          <div className="menu__chips">
            {data.flavors.map((f, i) => (
              <span className="menu__chip" key={i}>{f}</span>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default function Menu() {
  return (
    <section className="section menu" id="menu">
      <span className="v-label" aria-hidden="true">品書き — Menu</span>

      <Reveal className="menu__head">
        <p className="section__eyebrow">お品書き / Menu</p>
        <h2 className="section__title">昼と夜の、しつらえ。</h2>
        <p className="section__lead">
          季節により内容は変わります。最新はInstagramにて。（表示は税込）
        </p>
      </Reveal>

      <Reveal className="menu__grid" delay={120}>
        <MenuColumn data={site.menu.day} />
        <span className="menu__divider" aria-hidden="true" />
        <MenuColumn data={site.menu.night} />
      </Reveal>
    </section>
  );
}
