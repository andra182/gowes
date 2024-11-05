import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#013450] w-full">
        <div className="flex pt-10 px-20 justify-between pb-6">
          <div className="w-1/4">
            <p className="poppins-extrabold-italic text-2xl text-white mb-3">
              GOWES
            </p>
            <p className="poppins-regular text-white">
              Platform terbaik bagi pecinta sepeda di Indonesia! Temukan sepeda,
              aksesoris, dan tips berkendara untuk semua kalangan.
            </p>
          </div>
          <div className="w-2/4 flex px-20">
            <div className="w-1/2">
              <p className="poppins-regular text-white">Terbaru</p>
              <p className="poppins-regular text-white">Gowes Now</p>
              <p className="poppins-regular text-white">Video & Review</p>
              <p className="poppins-regular text-white">Pilihan Utama</p>
            </div>
            <div className="w-1/2">
              <p className="poppins-regular text-white">Careers</p>
              <p className="poppins-regular text-white">Contact Us</p>
              <p className="poppins-regular text-white">Privacy Policy</p>
              <p className="poppins-regular text-white">Terms & Conditions</p>
            </div>
          </div>
          <div className="w-1/4">
            <p className="poppins-bold text-xl text-white mb-3">
              Gowes Support <br />
              <span className="text-sm">Email: Gowes@support.id</span>
            </p>
            <p className="poppins-regular-italic text-white">Follow Us</p>
            <div className="flex gap-3 mt-2">
              <Icon
                icon="akar-icons:facebook-fill"
                color="white"
                width="20"
                height="20"
              />
              <Icon
                icon="akar-icons:instagram-fill"
                color="white"
                width="20"
                height="20"
              />
              <Icon
                icon="akar-icons:twitter-fill"
                color="white"
                width="20"
                height="20"
              />
              <Icon
                icon="akar-icons:youtube-fill"
                color="white"
                width="20"
                height="20"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#00778D] w-full py-3">
        <p className="poppins-regular text-center text-white">
          © 2023 Gowes. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
