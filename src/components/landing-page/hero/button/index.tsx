import clsx from "clsx";
import React from "react";

interface ButtonHeroProps {
  text: React.ReactElement | string;
  className?: string;
}

const ButtonHero: React.FC<ButtonHeroProps> = ({ text, className }) => {
  return (
    <button
      className={clsx(
        "group relative cursor-pointer overflow-hidden bg-accent uppercase",
        className
      )}
    >
      <span className="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-black transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32" />
      <span className="ease relative text-white transition duration-300 group-hover:text-white">
        {text}
      </span>
    </button>
  );
};

export default ButtonHero;
