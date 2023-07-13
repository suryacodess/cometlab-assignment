import React from "react";
import "./sass/styles.css";

export default function Video() {
  return (
    <section className="video">
      <div className="video-inner">
        <div className="video-data">
          <div className="heading-text">
            <h1>Show visitors what they're signing up for</h1>
            <p>
              Include a video or photo from one of your sessions to help people
              understand your service (or just to hype ‘em up).
            </p>
          </div>
          <div className="video-container">
            <video autoPlay controls>
              <source
                src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/EyvF0jkPg/videoblocks-camera-follows-caucasian-manager-coming-up-and-talking-to-colleagues-happy-multiethnic-employees-in-modern-office-4k_rb3l4gjig__3fc9d13b5de6bb055396777fab6d419c__P360.mp4"
                type="video/mp4"
              />
              <source
                src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/EyvF0jkPg/videoblocks-camera-follows-caucasian-manager-coming-up-and-talking-to-colleagues-happy-multiethnic-employees-in-modern-office-4k_rb3l4gjig__3fc9d13b5de6bb055396777fab6d419c__P360.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
