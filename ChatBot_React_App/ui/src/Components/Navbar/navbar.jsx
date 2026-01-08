import "./navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);

  useEffect(() => {
    const navbar = document.getElementById("navbar");

    const onScroll = () => {
      if (!navbar) return;
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav id="navbar">
      <div className="nav-container">
        <a href="/" className="logo-link">
          <svg
            className="logo-svg"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF5E00" stopOpacity="1" />
                <stop offset="100%" stopColor="#00B2FF" stopOpacity="1" />
              </linearGradient>
            </defs>

            <polygon
              points="20,2 38,14 38,26 20,38 2,26 2,14"
              fill="none"
              stroke="url(#logoGradient)"
              strokeWidth="2"
            />

            <polygon
              points="20,8 32,16 32,24 20,32 8,24 8,16"
              fill="url(#logoGradient)"
              opacity="0.3"
            />

            <circle cx="20" cy="20" r="3" fill="url(#logoGradient)" />
          </svg>

          <span className="logo-text">ELECTRIC XTRA</span>
        </a>

        <ul className="nav-links">
  <li><Link to="/" className="nav-link">Home</Link></li>
  <li><Link to="/features" className="nav-link">Features</Link></li>
  <li><Link to="/about" className="nav-link">About</Link></li>
  <li><Link to="/login" className="nav-link">Login</Link></li>
  <li><Link to="/register" className="nav-link">Register</Link></li>
</ul>


        <div className="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
