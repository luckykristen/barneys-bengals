import "./FeaturedKittens.css";
import { litters } from "./data/litters.js";


function flattenAvailableKittens(limit) {
    const out = [];

    for (const litter of litters) {
        for (const k of litter.kittens || []) {
            if (k.status === "available" || k.status === "reserved") {
                out.push({
                    ...k,
                    litterTitle: litter.title,
                });
            }
        }
    }

    return typeof limit === "number" ? out.slice(0, limit) : out;
}

function StatusBadge({ status }) {
  const map = {
    available: "Volné",
    reserved: "Rezervované",
  };

  const cls =
    status === "available" ? "badge badge--free" : "badge badge--reserved";

  return <span className={cls}>{map[status]}</span>;
}

export default function FeaturedKittens() {
    const kittens = flattenAvailableKittens();

    return (
        <section className="fk section">
            <div className="container">
                <div className="fk_head">
                    <div>
                        <p className="kicker">Aktuálně</p>
                        <h2 className="h-serif fk_title">Dostupná koťata</h2>
                        <p className="fk_subtitle">Níže jsou koťata, která jsou volná nebo rezervována. U každé fotky najdete popis aktuálního stavu, pohlaví, název a další informace ohledně koťat.</p>
                    </div>
                </div>

                {kittens.length === 0 ? (
                    <div className="fk_empty">
                        <div className="fk_emptyBox">
                            <p className="fk_emptyTitle">Momentálně nemáme volná koťata.</p>
                            <p className="fk_emptyText">Napište nám a dáme vědět o plánovaných vrzích nebo o tom, co bude brzy dostupné.</p>
                            <a className="btn btn-primary" href="/contact">Napsat zprávu</a>
                        </div>
                    </div>
                    ) : (
                    <div className="fk_grid">
                        {kittens.map((k) => (
                            <a key={k.id} className="fk_card" href="/kittens">
                                <div className="fk_media">
                                    {k.cover ? (
                                        <img src={k.cover} alt={k.name} loading="lazy" />
                                    ) : (
                                        <div className="fk_mediaPlaceholder" />
                                    )}
                                

                                    <div className="fk_badgeWrap">
                                        <StatusBadge status={k.status} />
                                    </div>

                                    <div className="fk_overlay" aria-hidden="true" />
                                </div>

                                <div className="fk_body">
                                    <div className="fk_row">
                                        <h3 className="fk_name">{k.name}</h3>
                                        <span className="fk_litter">{k.litterTitle}</span>
                                    </div>

                                    <p className="fk_meta">
                                        {k.sex === "male" ? "Kocour" : "Kočka"}
                                        {k.color ? ` • ${k.color}` : ""}
                                    </p>

                                    {k.note ? <p className="fk_note">{k.note}</p> : null}
                                </div>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}