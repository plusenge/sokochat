import React from "react";
import Footer from "../Footer";

const TermConditions = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center mb-3 text-dark">Terms and Conditions</h1>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <p className="lead">
              These terms and conditions ("Agreement")are an agreement between
              sokochat.com ("Website Operator","us","we"or "our") and you
              ("User", "you" or "your"). This Agreement sets forth the general
              terms and conditions of your use of the sokochat.com website and
              any of its products or services (collectively, "Website" or
              "Services").
            </p>

            <h3 className="mt-0">1. Acceptance of terms</h3>
            <p>
              By using the Website or its Services, you agree to be bound by
              this Agreement, whether or not you have read it. If you do not
              agree to this Agreement, you are not authorized to use the Website
              or its Services.
            </p>

            <h3 className="mt-0">2. Use of the website and services</h3>
            <p>
              The Website and its Services are intended for individuals aged 18
              years or older. Any access to or use of the Website or its
              Services by anyone under 18 years is expressly prohibited. By
              accessing or using the Website or its Services, you represent and warrant that you are 18 years or older.
            </p>

            <h3 className="mt-0">3. User content</h3>
            <p>
              We do not own any data, information or material ("Content") that
              you submit on the Website in the course of using the Service. You
              shall have sole responsibility for the accuracy, quality,
              integrity, legality, reliability, appropriateness, and
              intellectual property ownership or right to use of all submitted
              Content. We may monitor and review Content on the Website
              submitted or created using our Services by you.
            </p>

            <h3 className="mt-0">4. Modifications and interruptions</h3>
            <p>
              We reserve the right to modify or discontinue the Website or its
              Services with or without notice to you. We will not be liable to
              you or any third party should we exercise such right. We reserve
              the right to interrupt the Services with or without notice to you,
              in order to perform maintenance or upgrades, or to resolve any
              issues that we determine, in our sole discretion, need to be
              resolved.
            </p>

            <h3 className="mt-0">5. Governing law</h3>
            <p>
              This Agreement, and any dispute arising out of or in connection
              with this Agreement, shall be governed by and construed in
              accordance with the laws of the state of California, without
              regard to its conflict of law provisions.
            </p>

            <h3 className="mt-0 mb-2">6. Contact information</h3>
            <p>
              If you have any questions about this Agreement, please contact us
              at support@sokochat.com.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermConditions;
