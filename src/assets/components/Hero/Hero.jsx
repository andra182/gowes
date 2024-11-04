import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <div className="Hero py-10 px-20 flex h-[90vh] justify-between">
        <div className="Hero-Content self-center flex flex-col gap-5 w-[530px]">
          <h1 className="text-7xl leading-[100px] poppins-extrabold Hero-title">
            WELCOME TO GOWES
          </h1>
          <p className=" poppins-regular">
            Komunitas sepeda untuk semua kalangan, dari pemula hingga
            profesional. Bersama kami, rasakan semangat bersepeda yang
            sesungguhnya!
          </p>
        </div>
        <div className="Hero-Image py-20 w-1/2 px-20">
          <div className="flex justify-between">
            <div className="">
              <img src="/assets/Hero/Hero-img1.svg" alt="" />
              <img src="/assets/Hero/Hero-img3.svg" alt="" />
            </div>
            <div className="items-center flex">
              <img src="/assets/Hero/Hero-img2.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
