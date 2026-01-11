import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import FeaturedKittens from './FeaturedKittens.jsx';
import { useEffect, useState } from 'react';


  export default function App() {
    const location = useLocation();
    const [fade, setFade] = useState(false);

    useEffect(() => {
      setFade(true);
      const t = setTimeout(() => setFade(false), 300);
      return () => clearTimeout(t);
    }, [location.pathname]);


    return (
      <>
        <Navbar />

        <main className={`page ${fade ? "page--fade" : ""}`}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/kittens" element={<FeaturedKittens />} />
          </Routes>
        </main>
      </>
    );
  }
