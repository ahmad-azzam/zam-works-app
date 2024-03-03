"use client";

import React from "react";
import Nav from "./nav";
import MobileNav from "./mobileNav";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { MdMenu } from "react-icons/md";

const Header: React.FC = () => {
  const [headerActive, setHeaderActive] = React.useState<boolean>(false);
  const [openNav, setOpenNav] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        "fixed w-full bg-primary-200 transition-all max-w-[1920px] top-0",
        headerActive ? "h-[100px]" : "h-[124px]"
      )}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        <Link href="">
          <Image
            src={"/assets/img/zam-logo.png"}
            alt="zam-logo"
            width={117}
            height={55}
          />
        </Link>
        <MobileNav
          className={clsx(
            "md:hidden text-white flex flex-col text-center gap-8 fixed bg-primary-200 w-full left-0 text-base uppercase font-medium transition-all",
            headerActive ? "top-[100px]" : "top-[124px]",
            openNav
              ? "max-h-max pt-8 pb-10 border-t border-white/10"
              : "max-h-0 pt-0 pb-0 overflow-hidden border-white/0"
          )}
        />
        <Nav className="gap-4 hidden md:flex text-white transition-all text-base uppercase font-medium" />
        <div className="flex items-center gap-4">
          <div className="text-white flex items-center gap-4">
            <button className="hover:text-accent transition-all text-base uppercase font-medium">
              Login
            </button>
            <button className="hover:text-accent transition-all text-base uppercase font-medium">
              Register
            </button>
          </div>
          <button
            onClick={() => setOpenNav(!openNav)}
            className="text-white md:hidden"
          >
            <MdMenu className="text-4xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
