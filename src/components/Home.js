import React, { useEffect, useState } from "react";
import bannerImg from "../assets/images/banner2.png";
import "../components/Home.css";
import {Link} from "react-router-dom";

import Footer from "../components/Footer";

function HomePageHeader() {



  return (
    <>
      <div
        data-aos="fade-right"
        className="banner "
        style={{
          background: "#f9f9f9",
          display: "flex",
          justifyContent: "center",
          padding: "50px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          justifyItems: "center",
          height:"50vh"
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            
            className="row align-items-center"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="col-md-6">
              <img
                src={bannerImg}
                alt="Banner"
                className="img-fluid w-100 h-100"
                style={{
                  boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div className="col-md-6 ">
              <h1
                className="banner-title"
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  color: "#333",
                  marginBottom: "1rem",
                  textAlign: "center",
                }}
              >
                Explore classified ads world!
              </h1>
              <p
                className="banner-subtitle"
                style={{
                  fontSize: "1.5rem",
                  color: "#666",
                  marginBottom: "2rem",
                  textAlign: "center",
                }}
              >
                Find what you need and sell what you don't!
              </p>
              <div className="text-center">
                <Link
                  to="/Products"
                  className="btn btn-primary"
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "0",
                    boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
                    transition: "all 0.5s ease",
                  }}
                >
                  Get Started
                </Link>
              </div>

              <div className="d-flex homepage-header-links-container mt-4">
                <Link
                  to="/sell"
                  className="homepage-header-link sell-button"
                  style={{
                    backgroundColor: "#ffa500",
                    color: "#fff",
                    fontWeight: "bold",
                    padding: "0.5rem",
                    borderRadius: "10px",
                    boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
                    transition: "all 0.5s ease",
                    marginRight: "1rem",
                    textDecoration: "none",
                  }}
                >
                  Sell on Market...
                </Link>
                <Link
                  to="/auth/login"
                  className="homepage-header-link login-button"
                  style={{
                    backgroundColor: "#333",
                    color: "#fff",
                    fontWeight: "bold",
                    padding: "0.5rem",
                    borderRadius: "10px",
                    boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
                    transition: "all 0.5s ease",
                    textDecoration: "none",
                  }}
                >
                  Log In or Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePageHeader;
