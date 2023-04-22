// import React from "react";
// import { FaUsers, FaHeart } from "react-icons/fa";

// const AboutUs = () => {
//   return (
//     <div className="container py-5">
//       <div className="row">
//         <div className="col-md-6">
//           <h2 className="mb-4">About Sokochat Classified Ads</h2>
//           <p>
//             Sokochat Classified Ads is an online platform where individuals and
//             businesses can buy and sell a wide range of products and services.
//             Our mission is to provide a safe and easy-to-use platform that
//             connects buyers and sellers, allowing them to make transactions with
//             confidence.
//           </p>
//           <p>
//             At Sokochat, we are passionate about fostering a culture of trust
//             and respect. We believe that by providing a platform that is fair,
//             transparent, and user-friendly, we can help people connect with one
//             another and build lasting relationships.
//           </p>
//         </div>
//         <div className="col-md-6">
//           <div className="d-flex justify-content-center align-items-center h-100">
//             <div>
//               <FaUsers className="display-4 mb-3 text-primary" />
//               <h3>Connect with People</h3>
//               <p>
//                 Whether you're looking to buy or sell, Sokochat makes it easy to
//                 connect with people in your community and beyond.
//               </p>
//             </div>
//           </div>
//           <div className="d-flex justify-content-center align-items-center h-100 mt-4">
//             <div>
//               <FaHeart className="display-4 mb-3 text-primary" />
//               <h3>Build Lasting Relationships</h3>
//               <p>
//                 At Sokochat, we believe that our platform can help people build
//                 lasting relationships based on trust and respect.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;


import React from "react";
import { FaUsers, FaUserTie, FaHandshake, FaHeart } from "react-icons/fa";
import Footer from "../Footer";

const AboutUs = () => {
  return (
    <>
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <h2 className="mb-3">About Sokochat Classified Ads</h2>
          <p className="lead">
            Sokochat is a platform for buying and selling products and services.
            Our mission is to provide a safe and user-friendly platform for
            users to connect and transact.
          </p>
          <p>
            At Sokochat, we believe that every user deserves a fair and
            trustworthy experience. That's why we have implemented various
            safety features and policies to ensure that all transactions are
            secure and legitimate.
          </p>
          <p>
            Our team is dedicated to providing excellent customer service and
            support. If you have any questions or concerns, feel free to contact
            us at any time.
          </p>
          <p>
            <strong>
              Thank you for choosing Sokochat for your buying and selling needs!
            </strong>
          </p>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-center align-items-center">
            <div>
              <FaUsers className="display-4 mb-3 text-primary" />
              <h3>Connect with Other Users</h3>
              <p>
                With thousands of users from all over the world, Sokochat is a
                great way to connect with others and buy or sell products and
                services.
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-4">
            <div>
              <FaUserTie className="display-4 mb-3 text-primary" />
              <h3>Trustworthy Transactions</h3>
              <p>
                Our safety features and policies ensure that all transactions on
                Sokochat are secure and legitimate, so you can buy or sell with
                confidence.
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-4">
            <div>
              <FaHandshake className="display-4 mb-3 text-primary" />
              <h3>Excellent Customer Support</h3>
              <p>
                Our team is dedicated to providing excellent customer service
                and support. Contact us at any time with your questions or
                concerns.
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-4">
            <div>
              <FaHeart className="display-4 mb-3 text-primary" />
              <h3>We Love Our Users</h3>
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
      <Footer/>
    </>
  );
};

export default AboutUs;