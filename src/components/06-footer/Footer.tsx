import React from "react";
import "../.././styles/components/footer.scss";
import img from '../../public/images/footer.jpg';

function Footer() {
  return (
    <footer>
      <div className="footer-join-us">
        <div className="text-container">
          <div className="relative-text">
            <h1>We want you in <span className="highlight">Our Team!</span></h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio,
              voluptatum quibusdam earum accusantium expedita atque culpa,
              praesentium ipsa consequatur similique ullam corrupti dolorem
              optio eaque excepturi quaerat, molestias totam maxime.
            </p>
          </div>
        </div>
        <div className="image-container">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="footer-social-media">
        <h1>Follow us</h1>
        <div className="social-media-icons">
          <a href="https://www.facebook.com/">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.twitter.com/">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.youtube.com/">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
      <div className="footer-contact">
        <h1>Contact us</h1>
        <div className="contact-info">
          <div className="contact-info-item">
            <h2>Phone</h2>
            <p>123-456-789</p>
          </div>
          <div className="contact-info-item">
            <h2>Email</h2>
            <p>
              <a href="mailto:example@example.com">example@example.com</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
