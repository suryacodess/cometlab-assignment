import React from "react";
import "./sass/styles.css";

export default function Testimonial() {
  return (
    <section className="testimonial">
      <div className="testimonial-inner">
        <div className="testimonial-heading">
          <h3>DON'T JUST TAKE OUR WORD FOR IT</h3>
        </div>
        <div className="testimonial-data">
          <div className="data">
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <h1>
              Share a real testimonial that hits some of your benefits (but
              isn't too sales-y).
            </h1>
            <div className="img">
              <img
                src="https://media.sgff.io/sgff_r1eHetbDYb/2022-10-12/1665610777549/The_state_of_women_1_320x286.png"
                alt="user1"
              />
              <div className="img-text">
                <h6>Real Name</h6>
                <p>Location</p>
              </div>
            </div>
          </div>
          <div className="data">
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <h1>
              Include someone talking about how easy it was to sign up and
              participate.
            </h1>
            <div className="img">
              <img
                src="https://femina.wwmindia.com/content/2021/sep/women-thumb1632797644.jpg"
                alt="user2"
              />
              <div className="img-text">
                <h6>Real Name</h6>
                <p>Location</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
