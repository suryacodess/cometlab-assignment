import React from "react";
import "./sass/styles.css";

export default function About() {
  return (
    <section className="about">
      <div className="about-inner">
        <div className="about-img">
          <img
            src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/df213ca0-multor-about_10cs0b400000000000001o.jpg"
            alt="about-img"
          />
        </div>
        <div className="about-text">
          <div className="text">
          <h6>ABOUT</h6>
          <h1>Some more information about your business</h1>
          <p>
            Share a little about yourself as a business owner, or maybe describe
            what makes your service unique. Give visitors one more reason to
            care about your offer and want to work with you.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
}
