import "./BreedPage.css";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import imgParallax from "../public/images/cats/parallax.png"
import BreedFAQ from "./BreedFAQ";

function ParallaxRevealImage({ src, alt = "" }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({ opacity: 0, transform: "translateY(24px)" });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;

      // progress: 0 když je sekce mimo, 1 když je uprostřed viewportu
      const mid = rect.top + rect.height / 2;
      const t = 1 - Math.min(1, Math.max(0, Math.abs(mid - vh / 2) / (vh / 2)));

      // jemné křivky (lux vibe)
      const opacity = 0.15 + t * 0.85; // 0.15 → 1.0
      const translate = (1 - t) * 26;  // 26px → 0px
      const parallax = (vh / 2 - mid) * 0.04; // drobný posun

      setStyle({
        opacity,
        transform: `translateY(${translate + parallax}px) scale(1.02)`,
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={ref} className="breed_parallax">
      <div className="container">
        <div className="breed_parallaxFrame">
          <div className="breed_parallaxMedia" style={style}>
            <img src={imgParallax} alt={alt} loading="lazy" />
            <div className="breed_parallaxOverlay" aria-hidden="true" />
          </div>

          <div className="breed_parallaxCopy">
            <p className="kicker">Vzhled</p>
            <h2 className="h-serif breed_h2">Divoký vzhled, domácí srdce</h2>
            <p className="breed_p">
              Bengálka zaujme kontrastní srstí a atletickou stavbou těla. Ale největší “wow” přijde,
              když si sedne k vám a chce být u všeho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function BreedPage() {
    return (
        <main className="breed">
            <header className="breed_hero">
                <div className="container breed_heroInner">
                    <p className="kicker">O plemeni</p>
                    <h1 className="h-serif breed_title">Bengálská kočka</h1>
                    <p className="breed_subtitle">
                        Inteligentní, aktivní a výrazně kontaktní plemeno s "divokým" vzhledem - ale domácí povahou, pokud se mu dá správná péče, rutina a prostor.
                    </p>

                </div>
                <div className="breed_heroGlow" aria-hidden="true" />
            </header>

            <section className="breed_section">
                <div className="container">
                    <div className="breed_grid">
                        <div className="breed_panel">
                            <h2 className="h-serif breed_h2">Charakter & energie</h2>
                            <p className="breed_p">
                                Bengálka je často “pes v kočičím těle”. Baví ji interakce, hry, učení triků a společnost lidí.
                                Není to plemeno do tichého bytu bez podnětů. Když se nudí, najde si program sama — a to se vám
                                nemusí líbit.
                            </p>
                            <div className="breed_bullets">
                                <div className="breed_bullet"><span className="breed_dot" /> Vysoká aktivita a zvídavost</div>
                                <div className="breed_bullet"><span className="breed_dot" /> Často miluje hru a aportování</div>
                                <div className="breed_bullet"><span className="breed_dot" /> Silní vazba na člověka</div>
                            </div>
                        </div>

                        <aside className="breed_facts">
                            <div className="breed_factsHead">
                                <div className="breed_factsTitle">Rychlý přehled</div>
                                <div className="breed_line" aria-hidden="true" />
                            </div>

                            <div className="breed_factRow">
                                <span className="breed_factKey">Povaha</span>
                                <span className="breed_factVal">aktivní, kontaktní</span>
                            </div>

                            <div className="breed_factRow">
                                <span className="breed_factKey">Vhodné pro</span>
                                <span className="breed_factVal">lidi, co chtějí interakci</span>
                            </div>

                            <div className="breed_factRow">
                                <span className="breed_factKey">Nároky</span>
                                <span className="breed_factVal">podněty, rutina, hra</span>
                            </div>

                            <div className="breed_factRow">
                                <span className="breed_factKey">Doporučení</span>
                                <span className="breed_factVal">škrabadla, police, hry</span>
                            </div>

                            <p className="breed_note">
                                Kdo chce "dekoraci na gauč", ať si bengálku radši nepořizuje. Kdo chce parťáka, bude nadšený.
                            </p>
                        </aside>
                    </div>
                </div>
            </section>

             <ParallaxRevealImage
                alt="Bengálská kočka — luxusní detail srsti"
            />

            <section className="breed_section">
                <div className="container">
                    <div className="breed_two">
                        <div className="breed_panel">
                            <h2>Péče v domácnosti</h2>
                            <p>
                                Základ je prostředí. Bengálky ocení vertikální prostor, více míst na šplhání a pravidelný režim.
                                Když jim dáte strukturu, jsou úžasné. Když ne, budou “vymýšlet”.
                            </p>

                            <div className="breed_cards">
                                <div className="breed_mini">
                                    <div className="breed_miniTitle">Prostor</div>
                                    <div className="breed_miniText">škrabadlo až ke stropu, police, okna</div>
                                </div>

                                <div className="breed_mini">
                                    <div className="breed_miniTitle">Hra</div>
                                    <div className="breed_miniText">krátce, často, ideálně každý den</div>
                                </div>

                                <div className="breed_mini">
                                    <div className="breed_miniTitle">Socializace</div>
                                    <div className="breed_miniText">kontakt s lidmi, zvuky domácnosti</div>
                                </div>
                            </div>
                        </div>

                        <div className="breed_panel">
                            <h2>Pro koho se hodí</h2>
                            <p>
                              Ideální je člověk, který chce aktivní kočku a bude s ní komunikovat. Pokud trávíš celý den pryč,
                                je fér uvažovat o dvou kočkách nebo o plemeni s nižší aktivitou. 
                            </p>

                            <div className="breed_split">
                                <div className="breed_splitCol">
                                    <div className="breed_tag">Hodí se</div>
                                    <ul className="breed_list">
                                        <li>pro aktivní domácnost</li>
                                        <li>pro lidi, co chtějí kontakt</li>
                                        <li>pro ty, co mají čas na hru</li>
                                    </ul>
                                </div>
                                <div className="breed_splitCol">
                                    <div className="breed_tag">Nehodí se</div>
                                    <ul className="breed_list">
                                        <li>pro "tichý byt bez podnětů"</li>
                                        <li>když čekáte velmi klidnou kočku</li>
                                        <li>pokud nemáte čas ani chuť řešit prostředí</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="breed_ctaBox">
                                <div>
                                    <div className="breed_ctaTitle">Chcete vědět, zda je bengálka pro Vás?</div>
                                    <div className="breed_ctaText">Napište nám pár vět o své domácnosti a poradíme Vám.</div>
                                </div>
                                <Link className="btn btn-primary" to="/contact">Napsat</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <BreedFAQ />
        </main>
    );
}