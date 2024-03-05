import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-300 py-5">
      <div className="container mx-auto">
        <span className="text-white">
          &copy; Copyright {new Date().getFullYear()} zam-works
        </span>
      </div>
    </footer>
  );
};

export default Footer;
