import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="w-full outline outline-1 py-4 px-8">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img
              src="/assets/Logo/Logo Gowes.svg"
              className="w-[77px] h-[70px] mr-3"
              alt="Flowbite Logo"
            />
          </a>
          <div className="nav-item flex gap-5">
            <a href="#" className="nav-link">
              Home
            </a>
            <a href="#" className="nav-link">
              About Us
            </a>
            <a href="#" className="nav-link">
              Activity
            </a>
            <a href="#" className="nav-link">
              Service
            </a>
            <a href="#" className="nav-link">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
