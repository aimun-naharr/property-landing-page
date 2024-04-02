import { Menu } from "lucide-react";
import React from "react";

export default function Header() {
  return (
    <div>
      <div
        role="navigation"
        className="md:px-20 px-4 h-[80px] flex  md:flex items-center justify-between "
      >
        <div className="md:text-3xl text-2xl font-bold" aria-controls="menu">
          <a href="#">Archivista</a>
        </div>
        <nav className="font-poppins">
          <div className="md:hidden block cursor-pointer" role="button">
            <Menu />
          </div>
          <ul className="hidden md:flex gap-8">
            <li role="presentation">
              <a href="#portfolio" role="menuitem">
                Portfolio
              </a>
            </li>
            <li role="presentation">
              <a href="#about" role="menuitem">
                About
              </a>
            </li>
            <li role="presentation">
              <a href="#blog" role="menuitem">
                Blog
              </a>
            </li>
            <li role="presentation">
              <a href="#contact" role="menuitem">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
