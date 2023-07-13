import React from "react";
import "./sass/styles.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <img
            src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/77034ff2-multor-logo-footer.svg"
            alt="footer-logo"
          />
        </div>

        <div className="footer-text">
          <p>© 2023 Insert Name Here. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
