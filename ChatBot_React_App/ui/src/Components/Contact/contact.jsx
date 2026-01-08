import "./contact.css";
import { useState, useEffect } from "react";

const Contact = () => {
     useEffect(() => {
    const form = document.getElementById("contactForm");
    if (!form) return;

    const submitHandler = (e) => {
      e.preventDefault();
      alert("Message sent! We'll get back to you soon.");
      form.reset();
    };

    form.addEventListener("submit", submitHandler);
    return () => form.removeEventListener("submit", submitHandler);
  }, []);
  return (
    <>
    <section className="contact" id="contact">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
            <div className="contact-form">
                <form id="contactForm">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" name="subject" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>
            <div className="contact-info">
                <h3>Connect With Us</h3>
                <div className="info-item">
                    <div className="info-icon">📧</div>
                    <div className="info-details">
                        <h4>Email</h4>
                        <p>contact@electricxtra.tech</p>
                    </div>
                </div>
                <div className="info-item">
                    <div className="info-icon">📱</div>
                    <div className="info-details">
                        <h4>Phone</h4>
                        <p>+1 (555) 123-4567</p>
                    </div>
                </div>
                <div className="info-item">
                    <div className="info-icon">📍</div>
                    <div className="info-details">
                        <h4>Location</h4>
                        <p>Neo Tokyo, Sector 7</p>
                    </div>
                </div>
                <div className="map-container">
                    <div className="map-placeholder">
                        <p>Interactive Map</p>
                        <p style={{ fontSize: "0.9rem", marginTop: "10px" }}>Neo Tokyo, Sector 7</p>
                    </div>
                    <div className="map-overlay"></div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default Contact;
