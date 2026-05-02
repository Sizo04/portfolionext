"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { navLinks } from "../data";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="ham-menu-btn" onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faBars} className="fa-2x" />
      </button>
      {isOpen && (
        <div className="ham-menu">
          <ul>
            {navLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
            <li>
              <a href="/cv.pdf" download="CV.pdf">
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
