import "./home.css";
import { useState, useEffect } from "react";

const Home = () => {
   useEffect(() => {
    const textSets = document.querySelectorAll(".text-set");
    let index = 0;

    const rotate = () => {
      textSets.forEach(t => t.classList.remove("active"));
      textSets[index].classList.add("active");
      index = (index + 1) % textSets.length;
    };

    rotate();
    const interval = setInterval(rotate, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
       <section className="hero" id="home">
        <div className="hero-content">
            <div className="text-rotator">
                <div className="text-set active">
                    <h1 className="glitch-text" data-text="FUTURE IS NOW">FUTURE IS NOW</h1>
                    <p className="subtitle">Enter the next dimension of digital innovation</p>
                </div>
                <div className="text-set">
                    <h1 className="glitch-text" data-text="BEYOND LIMITS">BEYOND LIMITS</h1>
                    <p className="subtitle">Where technology meets infinite possibilities</p>
                </div>
                <div className="text-set">
                    <h1 className="glitch-text" data-text="ELECTRIC DREAMS">ELECTRIC DREAMS</h1>
                    <p className="subtitle">Powering tomorrow's digital revolution today</p>
                </div>
            </div>
        </div>
        <div className="cta-container">
            <a href="#features" className="cta-button cta-primary">Get Started</a>
            <a href="#about" className="cta-button cta-secondary">Learn More</a>
        </div>
    </section>
    </>
  );
};

export default Home;
