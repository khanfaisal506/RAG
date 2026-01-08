import "./background.css";
import { useState, useEffect } from "react";

const Background = () => {
  useEffect(() => {
    const particlesContainer = document.getElementById("particles");
    if (!particlesContainer) return;

    particlesContainer.innerHTML = "";
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.animationDelay = Math.random() * 15 + "s";
      particle.style.animationDuration = Math.random() * 10 + 15 + "s";
      particle.style.background =
        Math.random() > 0.5 ? "#00B2FF" : "#FF5E00";

      particlesContainer.appendChild(particle);
    }
  }, []);

  return (
    <>
      {/* Animated Grid Background */}
      <div className="grid-bg"></div>
      <div className="gradient-overlay"></div>
      <div className="scanlines"></div>

      {/* Animated Shapes */}
      <div className="shapes-container">
        <div className="shape shape-circle"></div>
        <div className="shape shape-triangle"></div>
        <div className="shape shape-square"></div>
      </div>

      {/* Floating Particles */}
      <div id="particles"></div>
    </>
  );
};

export default Background;
