import React from "react";
import "./sass/styles.css";
export default function Feature() {
  return (
    <article className="feature">
      <div className="feature-inner">
        <div className="feature-data">
          <div className="img">
            <img
              src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/53ad3716-multor-feature1-image_100000000000000000001o.jpg"
              alt="feature1"
            />
          </div>
          <div className="description">
            <h1>Feature 1</h1>
            <p>
              Talk about some of the details of your offer with a focus on the
              value people get back.
            </p>
          </div>
        </div>
        <div className="feature-data">
          <div className="img">
            <img
              src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/adf66a57-multor-feature2-image_100000000000000000001o.jpg"
              alt="feature2"
            />
          </div>
          <div className="description">
            <h1>Feature 3</h1>
            <p>
              Is there a pain point that your service resolves? Tell visitors
              about it here.
            </p>
          </div>
        </div>
        <div className="feature-data">
          <div className="img">
            <img
              src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/6d486c61-multor-feature3-image_100000000000000000001o.jpg"
              alt="feature3"
            />
          </div>
          <div className="description">
            <h1>Feature 3</h1>
            <p>
              Alternatively, you could use this section to address some
              frequently asked questions.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
