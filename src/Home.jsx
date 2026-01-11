import Hero from "./Hero";
import TrustStrip from "./TrustStrip";
import "./Home.css";
import KittensTeaser from "./KittensTeaser";
import { Link } from "react-router-dom";
import About from "./About";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <KittensTeaser />
      <About />
      

      <section className="section contact">
        <div className="container">
          <p className="kicker">Kontakt</p>
          <h2 className="h-serif home_title">Máte zájem o kotě?</h2>
          <p className="home_muted">
            Napište nám pár vět o sobě a co hledáte. Ozveme se s aktuální dostupností.
          </p>

          <div className="home_ctaRow">
            <Link className="btn btn-primary" to="/contact">
              Napsat zprávu
            </Link>
            <a className="btn" href="/kittens">Zobrazit koťata</a>
          </div>
        </div>
      </section>
    </>
  );
}
