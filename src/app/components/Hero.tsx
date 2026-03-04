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
            Passionate Front-End Developer With experience in HTML, CSS, and
            JavaScript, I am a highly motivated and skilled front-end developer.
            I am also experienced in Figma design, SaaS, Git, and GitHub version
            control. I am also a strong problem solver and have a keen eye for
            detail. I am eager to learn new technologies and am always looking
            for ways to improve my skills. I am also a team player and am always
            willing to help others. I am confident that I have the skills and
            experience necessary to be a successful front-end developer.
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
            <Image
              src={image}
              alt="Aleksandar"
              width={400}
              height={600}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center center",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
