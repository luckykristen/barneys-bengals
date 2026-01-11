import "./About.css"

export default function About() {
    return (
        <section className="about section">
      <div className="container">
        <div className="about_grid">
          <div className="about_text">
            <p className="kicker">O nás</p>
            <h2 className="h-serif about_title">Chov, který má klid a pravidla</h2>

            <p className="about_p">
              Chováme bengálské kočky s důrazem na zdraví, povahu a kvalitu odchovu. Nejde nám o
              kvantitu — chceme, aby každé kotě odcházelo do nového domova sebejisté, dobře
              socializované a s jasnou péčí kolem.
            </p>

            <p className="about_p">
              Koťata vyrůstají v domácím prostředí, jsou zvyklá na běžný chod domácnosti a kontakt
              s lidmi. S budoucími majiteli komunikujeme otevřeně: dostanete informace o rodičích,
              péči, krmení i doporučení, jak kotěti usnadnit první týdny v novém domově.
            </p>

            <div className="about_bullets">
              <div className="about_bullet">
                <span className="about_dot" aria-hidden="true" />
                <span>Domácí odchov a socializace od prvních dnů</span>
              </div>
              <div className="about_bullet">
                <span className="about_dot" aria-hidden="true" />
                <span>Transparentní přístup: zdraví, rodiče, podmínky</span>
              </div>
              <div className="about_bullet">
                <span className="about_dot" aria-hidden="true" />
                <span>Podpora i po předání kotěte</span>
              </div>
            </div>
          </div>

          <div className="about_card">
            <div className="about_media" aria-hidden="true" />
            <div className="about_cardBody">
              <div className="about_miniTitle">Naše hodnoty</div>

              <div className="about_valueRow">
                <span className="about_valueKey">Zdraví</span>
                <span className="about_valueLine" aria-hidden="true" />
                <span className="about_valueVal">první místo</span>
              </div>

              <div className="about_valueRow">
                <span className="about_valueKey">Povaha</span>
                <span className="about_valueLine" aria-hidden="true" />
                <span className="about_valueVal">vyrovnaná</span>
              </div>

              <div className="about_valueRow">
                <span className="about_valueKey">Standard</span>
                <span className="about_valueLine" aria-hidden="true" />
                <span className="about_valueVal">kvalita</span>
              </div>

              <div className="about_valueRow">
                <span className="about_valueKey">Péče</span>
                <span className="about_valueLine" aria-hidden="true" />
                <span className="about_valueVal">transparentně</span>
              </div>

              <p className="about_note">
                Pokud máte otázky, napište nám — rádi poradíme, i když si kotě teprve zvažujete.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}