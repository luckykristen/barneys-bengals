import { Link } from "react-router-dom";
import "./KittensTeaser.css";

export default function KittensTeaser() {
  return (
    <section className="kt section">
      <div className="container">
        <div className="kt_panel">
          <div>
            <p className="kicker">Koťata</p>
            <h2 className="h-serif kt_title">Aktuální vrhy & dostupnost</h2>
            <p className="kt_text">
              Přehled vrhů a status koťat (volné / rezervované) najdete na samostatné stránce.
            </p>
          </div>

          <div className="kt_actions">
            <Link className="btn btn-primary" to="/kittens">
              Zobrazit koťata
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

