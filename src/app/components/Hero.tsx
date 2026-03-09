import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeroBackground from "../HeroBackground";
import "../styles/hero.css";
import {
  faGithub,
  faGithubSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Image from "next/image";
import image from "../images/Scan.jpg";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <HeroBackground />

      <div className="hero-container">
        <div className="text-container">
          <div className="headers">
            <h1>Hello, I'm Aleksandar.</h1>
            <h1 className="primary-color">Frontend Developer</h1>
          </div>
          <div className="text">
            I am a Front-End Developer specializing in React and TypeScript,
            with solid experience in HTML, CSS, and JavaScript. I am skilled in
            Figma design and Git/GitHub version control.I have strong
            problem-solving abilities and attention to detail, I am always eager
            to learn new technologies and improve my skills. A collaborative
            team player, I enjoy contributing to projects and supporting others,
            confident in my ability to deliver high-quality front-end solutions.
          </div>
          <div className="links">
            <div className="more">
              <a href="#about" className="learn-more-btn">
                Learn More
              </a>
            </div>
            <div className="connect">
              <a href="https://github.com/Sizo04" target="blank">
                <FontAwesomeIcon className="fa-2x" icon={faGithubSquare} />
              </a>
              <a
                href="https://www.linkedin.com/in/aleksandar-dimitrievski-353827248/"
                target="blank"
              >
                <FontAwesomeIcon className="fa-2x" icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
        <div className="image-container">
          <div className="image-container">
            <Image className="image" src={image} alt="Aleksandar" />
          </div>
        </div>
      </div>
    </section>
  );
}
