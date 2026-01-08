import "./about.css";
import { useEffect } from "react";

const About = () => {

  useEffect(() => {
    const section = document.getElementById("about");
    if (!section) return;

    // Fade-in animation
    section.classList.add("visible");

    // Active nav highlighting
    const onScroll = () => {
      const scrollPos = window.scrollY + 120;
      const top = section.offsetTop;
      const height = section.offsetHeight;

      const aboutLink = document.querySelector('.nav-link[href="/about"]');
      if (!aboutLink) return;

      if (scrollPos >= top && scrollPos < top + height) {
        aboutLink.classList.add("active");
      } else {
        aboutLink.classList.remove("active");
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="about" id="about">
      <h2 className="section-title">About Electric Xtra</h2>

      <div className="about-content">
        <div className="about-text">
          <h2>Pioneering the Digital Frontier</h2>
          <p>
            At ELECTRIC XTRA, we're not just building technology – we're crafting
            the future. Our mission is to bridge the gap between human potential
            and digital innovation.
          </p>
          <p>
            Founded by visionaries who saw beyond limitations, ELECTRIC XTRA
            represents a quantum leap in digital infrastructure.
          </p>
          <p>
            Join us as we redefine what's possible in the digital age.
          </p>
        </div>

        <div className="about-visual">
          <div className="about-graphic"></div>
        </div>
      </div>

      <div className="about-content" style={{ marginTop: "80px" }}>
        <div className="about-visual">
          <div className="about-graphic-alt">
            <div className="hexagon"></div>
            <div className="hexagon"></div>
            <div className="hexagon"></div>
          </div>
        </div>

        <div className="about-text">
          <h2>Innovation at Every Level</h2>
          <p>
            Our commitment to excellence drives us to push boundaries and
            challenge conventions.
          </p>
          <p>
            From AI to blockchain, we’re at the forefront of every technological
            revolution.
          </p>
          <p>
            With ELECTRIC XTRA, you’re embracing continuous evolution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
