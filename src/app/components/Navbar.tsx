import { navLinks } from "../data";
import "../styles/navbar.css";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-container">
          <h2>Aleksandar Dimitrievski</h2>
          <ul className="menu">
            {navLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>
          <a
            className="connect-link menu"
            href="https://www.linkedin.com/in/aleksandar-dimitrievski-353827248/"
            target="blank"
          >
            Let's Connect
          </a>
          <HamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
