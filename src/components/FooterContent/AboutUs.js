import React from "react";
import { FaUsers, FaUserTie, FaHandshake, FaHeart } from "react-icons/fa";
import Footer from "../Footer";

const AboutUs = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="mb-3 text-dark">About SokoChat Classified Ads</h2>
            <p className="lead">
              Sokochat is a platform for buying and selling products and
              services.
            </p>
            <p>
              At Sokochat, we believe that every user deserves a fair and
              trustworthy experience. That's why we have implemented various
              safety features and policies to ensure that all transactions are
              secure and legitimate.
            </p>
            <p>
              Our team is dedicated to providing excellent customer service and
              support. If you have any questions or concerns, feel free to
              contact us at any time.
            </p>
            <p>
              <strong>
                Thank you for choosing Sokochat for your buying and selling
                needs!
              </strong>
            </p>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-center align-items-center">
              <div>
                <FaUsers
                  className="display-4 text-primary"
                  fill="#55c2da"
                />
                <h4>Connect with Other Users</h4>
                <p>
                  With thousands of users from all over the world, Sokochat is a
                  great way to connect with others and buy or sell products and
                  services.
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center ">
              <div>
                <FaUserTie
                  className="display-4 text-primary"
                  fill="#55c2da"
                />
                <h4>Trustworthy Transactions</h4>
                <p>
                  Our safety features and policies ensure that all transactions
                  on Sokochat are secure and legitimate, so you can buy or sell
                  with confidence.
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <div>
                <FaHandshake
                  className="display-4 text-primary"
                  fill="#55c2da"
                />
                <h4>Excellent Customer Support</h4>
                <p>
                  Our team is dedicated to providing excellent customer service
                  and support. Contact us at any time with your questions or
                  concerns.
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              
              <div>
                  <FaHeart
                    className="display-4 mb-2 text-primary"
                    fill="#55c2da"
                  />
                  <h4>We Love Our Users</h4>
                <p>
                  At Sokochat, we believe that every user deserves a fair and
                  trustworthy experience. We love our users and are committed to
                  providing the best possible platform for buying and selling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
