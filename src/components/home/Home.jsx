import React from "react";
import "./sass/styles.css";

export default function Home() {
  return (
    <section className="home">
      <div className="home-text">
        <div className="home-logo">
          <img
            src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/42234823-multor-logo.svg"
            alt="logo"
          />
        </div>
        <div className="home-heading">
          <h1>Describe the value of booking an appointment</h1>
        </div>
        <div className="home-description">
          <p>
            No need to get clever. Tell people exactly what you're offering,
            then use this space to communicate your key value proposition.
          </p>
        </div>
      </div>
    </section>
  );
}
