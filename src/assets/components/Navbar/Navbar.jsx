import React from "react";
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <div>
      <div className="w-full py-4 px-20 bg-white">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img
              src="/assets/Logo/Logo Gowes.svg"
              className="w-[77px] h-[70px] mr-3"
              alt="Flowbite Logo"
            />
          </a>
          <div className="nav-item flex gap-5 poppins-medium ml-20">
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
          <div className="flex gap-4">
            <a href="#">
              <Icon icon="basil:instagram-solid" className="text-4xl" />
            </a>
            <a href="#">
              <Icon icon="basil:youtube-solid" className="text-4xl" />
            </a>
            <a href="#">
              <Icon icon="basil:facebook-solid" className="text-4xl" />
            </a>
            <a href="#">
              <Icon icon="basil:twitter-solid" className="text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
