// import React from "react";
// import { FaCheck, FaSearch, FaHandshake } from "react-icons/fa";

// const HowToUse = () => {
//   return (
//     <div className="container py-5">
//       <div className="row">
//         <div className="col-md-6">
//           <h2 className="mb-4">How to Use Sokochat Classified Ads</h2>
//           <p>
//             With Sokochat classified ads, you can buy and sell a wide range of
//             products and services. Here's how:
//           </p>
//           <ul className="list-unstyled">
//             <li className="mb-3">
//               <FaCheck className="me-2 text-primary" />
//               <strong>Create an account on Sokochat</strong> - This will allow
//               you to post ads and receive messages from potential buyers.
//             </li>
//             <li className="mb-3">
//               <FaCheck className="me-2 text-primary" />
//               <strong>
//                 Browse through available ads to find what you need
//               </strong>{" "}
//               - Use the search bar or browse by category to find items or
//               services that match your needs.
//             </li>
//             <li className="mb-3">
//               <FaCheck className="me-2 text-primary" />
//               <strong>
//                 Contact the seller or advertiser to make arrangements
//               </strong>{" "}
//               - Send a message or call the advertiser to ask any questions or
//               arrange a meeting.
//             </li>
//             <li className="mb-3">
//               <FaCheck className="me-2 text-primary" />
//               <strong>
//                 Meet with the seller to exchange goods and payment
//               </strong>{" "}
//               - Once you've agreed on the terms of the sale, meet with the
//               seller to complete the transaction.
//             </li>
//             <li className="mb-3">
//               <FaCheck className="me-2 text-primary" />
//               <strong>Rate your experience</strong> - After the sale is
//               complete, leave a review to help other users know what to expect
//               from the seller.
//             </li>
//           </ul>
//         </div>
//         <div className="col-md-6">
//           <div className="d-flex justify-content-center align-items-center h-100">
//             <div>
//               <FaSearch className="display-4 mb-3 text-primary" />
//               <h3>Find What You Need</h3>
//               <p>
//                 With a wide range of categories and a powerful search function,
//                 it's easy to find what you're looking for on Sokochat.
//               </p>
//             </div>
//           </div>
//           <div className="d-flex justify-content-center align-items-center h-100 mt-4">
//             <div>
//               <FaHandshake className="display-4 mb-3 text-primary" />
//               <h3>Make a Deal</h3>
//               <p>
//                 Once you've found what you need, contact the seller or
//                 advertiser to arrange a meeting and complete the transaction.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HowToUse;




import React from "react";
import { FaCheck, FaSearch, FaHandshake } from "react-icons/fa";
import Footer from "../Footer";

const HowToUse = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <h2 className="mb-4">How to Use Sokochat Classified Ads</h2>
            <p>
              With Sokochat classified ads, you can buy and sell a wide range of
              products and services. Here's how:
            </p>
            <ul className="list-unstyled">
              <li className="mb-3">
                <FaCheck className="me-2 text-primary" fill="#55c2da" />
                <strong>Create an account on Sokochat</strong> - This will allow
                you to post ads and receive messages from potential buyers.
              </li>
              <li className="mb-3">
                <FaCheck className="me-2 text-primary" fill="#55c2da" />
                <strong>
                  Browse through available ads to find what you need
                </strong>{" "}
                - Use the search bar or browse by category to find items or
                services that match your needs.
              </li>
              <li className="mb-3">
                <FaCheck className="me-2 text-primary" fill="#55c2da" />
                <strong>
                  Contact the seller or advertiser to make arrangements
                </strong>{" "}
                - Send a message or call the advertiser to ask any questions or
                arrange a meeting.
              </li>
              <li className="mb-3">
                <FaCheck className="me-2 text-primary" fill="#55c2da" />
                <strong>
                  Meet with the seller to exchange goods and payment
                </strong>{" "}
                - Once you've agreed on the terms of the sale, meet with the
                seller to complete the transaction.
              </li>
              <li className="mb-3">
                <FaCheck className="me-2 text-primary" fill="#55c2da" />
                <strong>Rate your experience</strong> - After the sale is
                complete, leave a review to help other users know what to expect
                from the seller.
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-6">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div>
                    <FaSearch
                      className="display-4 mb-3 text-primary"
                      fill="#55c2da"
                    />
                    <h3>Find What You Need</h3>
                    <p>
                      With a wide range of categories and a powerful search
                      function, it's easy to find what you're looking for on
                      Sokochat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div>
                    <FaHandshake
                      className="display-4 mb-3 text-primary"
                      fill="#55c2da"
                    />
                    <h3>Make a Deal</h3>
                    <p>
                      Once you've found what you need, contact the seller or
                      advertiser to arrange a meeting and complete the
                      transaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div
                className="ratio ratio-16x9"
                style={{ height: "220px", borderRadius: "7px !important" }}
              >
                <iframe
                  src="https://www.youtube.com/embed/YR6sGlyksL0"
                  title="Sokochat Classified Ads Video"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HowToUse;
