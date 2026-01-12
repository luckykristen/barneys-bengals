import "./Hero.css";
import heroImg from "./assets/bg_photo.png";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
    const bgRef = useRef(null);

    useEffect(() => {
        const onMove = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 10;
            const y = (e.clientY / window.innerHeight - 0.5) * 10;
            if (bgRef.current) {
                bgRef.current.style.transform = `scale(1.05) translate(${x}px, ${y}px)`;
            }
        }

        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
    }, []);

    return (
        <section className="hero">
            <div className="hero_bg" aria-hidden="true" ref={bgRef}
                style={{ backgroundImage: `url(${heroImg})` }} 
            />

            <div className="hero_overlay" aria-hidden="true" />
            <div className="container hero_inner">
                <p className="kicker">Chovatelská stanice</p>
                <h1 className="h-serif hero_title">Elegance, zdraví a povaha.
                    <span className="hero_titleSub">Bengálské kočky s důrazem na kvalitu chovu.</span>
                </h1>

                <p className="hero_text">
                    Odchov v domácím prostředí, socializace od prvních dnů, transparentní komunikace a podpora i po předání kotěte.
                </p>

                <div className="hero_actions">
                    <Link to="/kittens" className="btn btn-primary">Dostupná koťata</Link>
                    <Link to="/contact" className="btn">Kontaktujte nás</Link>
                </div>
            </div>
        </section>
    );
}