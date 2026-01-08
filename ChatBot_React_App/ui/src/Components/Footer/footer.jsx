import "./footer.css";
import { useState, useEffect } from "react";

const Footer = () => {

  return (
    <>
    <footer>
        <div className="footer-content">
            <div className="footer-links">
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
                <a href="#careers">Careers</a>
            </div>
            <p className="copyright">© 2025 ELECTRIC XTRA. All rights reserved. Building tomorrow, today. | Design: <a href="https://templatemo.com" target="_blank" rel="nofollow noopener">TemplateMo</a></p>
        </div>
    </footer>
    </>
  );
};

export default Footer;
