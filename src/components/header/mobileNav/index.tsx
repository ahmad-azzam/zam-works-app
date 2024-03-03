import { LINK_NAVBAR } from "@/constant";
import clsx from "clsx";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

interface MobileNavProps {
  className?: string;
}

const MobileNav: React.FC<MobileNavProps> = ({ className }) => {
  return (
    <nav className={clsx("", className)}>
      {LINK_NAVBAR.map((item, index) => {
        return (
          <ScrollLink
            key={`nav-${index}`}
            activeClass="navbar__link__active"
            offset={item.offset}
            to={item.target}
            className="cursor-pointer hover:text-accent transition-all"
            smooth
            spy
          >
            {item.name}
          </ScrollLink>
        );
      })}
    </nav>
  );
};

export default MobileNav;
