import React from "react";
import "./sass/styles.css";

export default function AppointmentForm() {
  return (
    <section className="appointment">
      <div className="appointment-inner">
        <div className="appointment-text">
          <div className="text">
            <div className="logo">
              <img
                src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/13b0f11a-multor-benefit1-icon.svg"
                alt=""
              />
            </div>
            <div className="description">
              <div className="heading">
                <h2>Benefit 1</h2>
                <p>
                  Highlight the benefits of signing up for an appointment,
                  online class, or video consultation.
                </p>
              </div>
            </div>
          </div>
          <div className="text">
            <div className="logo">
              <img
                src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/8ab92ea8-multor-benefit2-icon.svg"
                alt=""
              />
            </div>
            <div className="description">
              <div className="heading">
                <h2>Benefit 2</h2>
                <p>
                  For example, fitness instructors might describe how their
                  routines make people healthier *and* happier.
                </p>
              </div>
            </div>
          </div>
          <div className="text">
            <div className="logo">
              <img
                src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/c32dd90d-multor-benefit3-icon.svg"
                alt=""
              />
            </div>
            <div className="description">
              <div className="heading">
                <h2>Benefit 3</h2>
                <p>
                  Remind visitors how easy it is to claim your offer and start
                  enjoying the benefits.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="appointment-form">
          <div className="appointment-form-inner">
            <div className="heading">
              <h1>Schedule an Appointment</h1>
              <p>
                Here, let visitors know what will happen when they complete your
                form.
              </p>
            </div>

            <form>
              <div className="first-name input ">
                <input type="text" placeholder="First Name" />
              </div>
              <div className="last-name input">
                <input type="text" placeholder="Last Name" />
              </div>
              <div className="email input">
                <input type="email" placeholder="Email" />
              </div>
              <div className="number input">
                <input type="text" placeholder="Phone Number" />
              </div>
              <div className="type input">
                <select>
                  <option value="type1">Type 1</option>
                  <option value="type2">Type 2</option>
                  <option value="type3">Type 3</option>
                </select>
              </div>
              <button>SCHEDULE NOW</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
