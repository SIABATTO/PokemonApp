import React from "react";
import { Link } from "react-router-dom";
import style from "./Landing.module.css";
import linkedin from "../../images/linkedin.png";
import github from "../../images/github.jpg";

const Landing = () => {
  return (
    <div className={style.containerLanding}>
      <div className={style.infoLanding}>
        <h1>Welcome</h1>
        <h1>to the Pokemon API</h1>
        <p>Start your Pokemon journey </p>

        <Link to="/home">
          <button>Let's Start !</button>
        </Link>
        <div>
          <a href="https://www.linkedin.com/in/andres-siabatto-garcia-92149a162/">
            <img
              src={linkedin}
              alt="LinkedIn"
              style={{ width: "25px", height: "25px" }}
            />
          </a>
          <a href="https://github.com/SIABATTO">
            <img
              src={github}
              alt="GitHub"
              style={{ width: "25px", height: "25px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
