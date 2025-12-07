import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a
            href="/public/personal/Mahmoud_Elnakhlawy_Front-End Developer_resume1.pdf"
            download={"Mahmoud_Elnakhlawy_Front-End Developer_resume1.pdf"}
          >
            CV
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mahmoud-elnakhlawy-397b381b3/">
            Linkedin
          </a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Certificates</a>
        </li>
      </ul>

      <p>© 2025 M Elnakhlawy. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
