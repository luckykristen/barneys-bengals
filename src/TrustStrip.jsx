import "./TrustStrip.css";

const items = [
    { title: "Testování", desc: "Zdravotní testy a transparentní informace o rodičích." },
    { title: "Socializace", desc: "Koťata vyrůstají v rodinném prostředí a jsou dobře socializovaná." },
    { title: "Smlouva", desc: "Jasné podmínky, poradenství a kontakt i po předání kotěte." },
    { title: "Standard", desc: "Důraz na typ, povahu a welfare." }, 
];

export default function TrustStrip() {
    return (
        <section className="trust">
            <div className="container">
                <div className="trust_head">
                    <h2 className="h-serif trust_title">Proč si vybrat právě nás?</h2>
                    <p className="trust_text">
                        Chovem bengálských koček se zabýváme již řadu let a klademe důraz na zdraví, povahu a kvalitu našich koček.
                        Naše kotě není jen zvíře, je to nový člen vaší rodiny.
                    </p>
                </div>

                <div className="trust_grid">
                    {items.map((x) => (
                        <div key={x.title} className="trust_card">
                            <div className="trust_top">
                                <span className="trust_dot" aria-hidden="true" />
                                <h3 className="trust_cardTitle">{x.title}</h3>
                            </div>
                            <p className="trust_cardDesc">{x.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}