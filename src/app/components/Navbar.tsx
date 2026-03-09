import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navLinks } from "../data";
import "../styles/navbar.css";
import HamburgerMenu from "./HamburgerMenu";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="name">
            <h2>Aleksandar Dimitrievski</h2>
          </div>
          <ul className="menu">
            {navLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>
          <div className="nav-btns">
            <a
              className="connect-link menu"
              href="https://www.linkedin.com/in/aleksandar-dimitrievski-353827248/"
              target="blank"
            >
              Let's Connect
            </a>
            {/* <a className="resume-btn" href="">
              <FontAwesomeIcon icon={faFileArrowDown} />
            </a> */}
          </div>

          <HamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
