import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./header.css";

const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <header className=" header-section flex">
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="menu icon-menu flex"
      >
        {" "}
      </button>
      <div />
      <div className="parent-avatar flex">
        <motion.img
          initial={{ transform: "scale(0)" }}
          animate={{ transform: "scale(1.1)" }}
          transition={{ damping: 6, type: "spring", stiffness: 100 }}
          src="./me.png"
          className="avatar"
          alt=""
        />
        <div className="icon-verified"></div>
      </div>
      <nav>
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
            <a
              href="https://www.linkedin.com/in/mahmoud-elnakhlawy-397b381b3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a href="">Certificates</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          // Send value to LS
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );

          // get value from LS
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"> </span>
        ) : (
          <span className="icon-sun"> </span>
        )}
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal ">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setshowModal(false);
                }}
              />
            </li>
            <li>
              <a
                href="/public/personal/Mahmoud_Elnakhlawy_Front-End Developer_resume1.pdf"
                download={"Mahmoud_Elnakhlawy_Front-End Developer_resume1.pdf"}
              >
                CV
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mahmoud-elnakhlawy-397b381b3/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a href="">Certificates</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
