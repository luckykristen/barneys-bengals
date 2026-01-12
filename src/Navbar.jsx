import { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const links = [
    { href: "/", label: "Domů" },
    { href: "/barneys-bengals/our-cats", label: "Naše kočky" },
    { href: "/barneys-bengals/kittens", label: "Koťata" },
    { href: "/barneys-bengals/breed", label: "O plemeni" },
    { href: "/barneys-bengals/contact", label: "Kontakt" },
]

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="nav">
            <div className="container nav_row">
                <Link className="nav_brand" to="/">
                    <span className="nav_brandMark">✦</span>
                    <span className="nav_brandText">Barney's Bengals
                        <span className="h-serif">Breeding Cattery</span>
                        <span className="nav_brandSub">Bengal Cats</span>
                    </span>
                </Link>

                <nav className="nav_links">
                    {links.map((l) => (
                    <a key={l.href} className="nav_link" href={l.href}>
                        {l.label}</a>
                    ))}
                </nav>

                <div className="nav_actions">
                    <Link className="btn btn-primary" to="/kittens">Dostupná koťata</Link>

                    <button
                        className="nav_burger"
                        onClick={() => setOpen((v) => !v)}
                        aria-label="Otevřít menu"
                        aria-expanded={open}
                        >
                          <span />
                          <span />
                          <span />  
                    </button>
                </div>
            </div>

            <div className={`nav_mobile ${open ? "is-open" : ""}`}>
                <div className="container nav_mobileInner">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            className="nav_mobileLink"
                            href={l.href}
                            onClick={() => setOpen(false)}
                        >
                            {l.label}
                        </a>
                    ))}

                <a className="btn btn-primary nav_mobileCta" href="/kittens" onClick={() =>setOpen(false)}>Dostupná koťata</a>
                </div>
            </div>
        </header>
    );
}