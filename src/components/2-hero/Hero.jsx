import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex" id="hero">
      <div className="left-section  ">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Hi, I&apos;m Mahmoud Elnakhlawy | MERN Stack Developer{" "}
          <span className="waving-hand">👋</span>
        </motion.h1>

        <p className="sub-title">
          I’m Mahmoud Ahmed Elnakhalawy, a software Developer
        </p>

        <div className="all-icons flex">
          <a href="https://github.com/elnakhlawi" target="_blanck">
            <div className="icon icon-github"></div>
          </a>
          <a href="https://www.linkedin.com/in/mahmoud-elnakhlawy-397b381b3/" target="_blanck">
            <div className="icon icon-linkedin"></div>
          </a>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
