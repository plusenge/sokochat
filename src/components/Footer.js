import { Link } from "react-router-dom";
import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="footer-container"
      style={{ width: "97%", margin: "auto", marginBottom: "-10rem" }}
    >
      <footer
        className="mt-5 text-light"
        style={{
          backgroundColor: "#55c2da",
          color: "#333",
          marginBottom: "1rem",
          borderRadius: "7px",
        }}
      >
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4" style={{ color: "#333" }}>
              <h5 className="text-light">About Us</h5>
              <p className="text-start">
                Sokochat Classified Ads is a platform that allows users to post
                and browse ads for various categories such as jobs, housing,
                vehicles, and more. It's an easy-to-use and reliable platform
                for buying, selling, or finding what you need.
              </p>
            </div>
            <div className="col-md-4 col-md-4 text-center">
              <h5>Information</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <Link className="text-dark" to="/privacy-policy">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="text-dark" to="/terms-conditions">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link className="text-dark" to="/about-us">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="text-dark" to="/how-to-use">
                    How to use
                  </Link>
                </li>
              </ul>
            </div>

            <div className="contact-us col-md-4 col-sm-12 text-md-start text-center">
              <h5>Contact Us</h5>
              <ul className="list-unstyled text-decoration-none text-small">
                <li>
                  <FaPhoneAlt className="me-2" />
                  <a href="tel:123-456-7890" className="text-dark">
                    123-456-7890
                  </a>
                </li>
                <li>
                  <FaEnvelope className="me-2" />
                  <a href="mailto:contact@example.com" className="text-dark">
                    infosokochat@gmail.com
                  </a>
                </li>
                <li className="social-media mt-3">
                  <a href="www.instagram.com" className="text-dark me-3">
                    <FaFacebook size={26} fill="#1877f2" />
                  </a>
                  <a href="www.instagram.com" className="text-dark me-3">
                    <FaTwitter size={26} fill="#1da1f2" />
                  </a>
                  <a href="www.instagram.com" className="text-dark me-3">
                    <FaInstagram size={26} fill="#c13584" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="py-3"
          style={{
            backgroundColor: "#5783db",
            color: "#FFFFFF",
            borderBottomLeftRadius: "7px",
            borderBottomRightRadius: "7px",
          }}
        >
          <div className="container text-center">
            <p className="mb-0">&copy; 2023 SokoChat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;




