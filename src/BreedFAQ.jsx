import { Link } from "react-router-dom";
import "./BreedFAQ.css";
import { useState } from "react";

const FAQ = [
    {
        q: "Je bengálská kočka vhodná do bytu?",
        a: "Ano, ale potřebuje prostředí. Vertikální prostor (škrabadla, police), pravidelnou hru a podněty. Bez toho se začne nudit a může být vynalézavá.",
    },
    {
        q: "Jsou bengálky mazlivé?",
        a: "Často ano, ale po svém. Hodně bengálek chce být u všeho, leží poblíž člověka, komunikuje — ne každá je ale “gaučový plyšák”.",
    },
    {
        q: "Kolik pohybu a hry bengálka potřebuje?",
        a: "Krátce a často. Ideálně denně několik bloků hry (10–15 minut) + možnost šplhat, skákat a pozorovat okolí. Duševní aktivita (hledací hry, klikr) je stejně důležitá jako běhání.",
    },
    {
        q: "Ničí bengálky nábytek?",
        a: "Můžou, když nemají správné vybavení. Když mají kvalitní škrabadla, místa na šplhání a pravidelnou hru, destrukce výrazně klesá. Nejhorší je nuda.",
    },
    {
        q: "Jsou bengálky hlaasité?",
        a: "Bývají komunikativní. Některé mňoukají víc, jiné méně. Často “mluví”, když chtějí pozornost, hru nebo jídlo. Rutina a interakce pomáhají.",
    },
    {
        q: "Hodí se bengálka k dětem?",
        a: "Může, pokud děti respektují hranice kočky a domácnost je aktivní. Bengálky nemají rády hrubé zacházení. Správné seznámení a pravidla jsou základ.",
    },
    {
        q: "Potřebuje bengálka kočičího parťáka?",
        a: "Často to pomůže, hlavně pokud jste přes den dlouho pryč. Některé bengálky jsou nejspokojenější ve dvojici. Záleží ale na konkrétní povaze a socializaci.",
    },
    {
        q: "Dá se bengálka naučit na postroj?",
        a: "Hodně bengálek to zvládne. Chce to postupně, pozitivně a bez nátlaku. Začněte doma, krátké úseky, odměny. Každá kočka je ale jiná.",
    },
];

function Item ({ q, a, open, onToggle }) {
    return (
        <div className={`bfq_item ${open ? "is-open" : ""}`}>
            <button className="bfq_q" onClick={onToggle} aria-expanded={open}>
                <span className="bfq_qText">{q}</span>
                <span className="bfq_icon" aria-hidden="true" />
            </button>
            <div className="bfq_wrap" style={{ maxHeight: open ? 220 : 0 }}>
                <p className="bfq_a">{a}</p>
            </div>
        </div>
    );
}

export default function BreedFAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="bfq_section">
            <div className="container">
                <div className="bfq_head">
                    <p className="kicker">FAQ</p>
                    <h2 className="h-serif bfq_title">Často kladené otázky</h2>
                    <p className="bfq_subtitle">Odpovědi jsou obecné. Každá bengálka je osobnost - pokud si nejste jistí, napište nám a poradíme dle vaší situace.</p>
                </div>

                <div className="bfq_grid">
                    {FAQ.map((x, i) => (
                        <Item
                            key={x.q}
                            q={x.q}
                            a={x.a}
                            open={openIndex === i}
                            onToggle={() => setOpenIndex((prev) => (prev === i ? -1 : i))}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}