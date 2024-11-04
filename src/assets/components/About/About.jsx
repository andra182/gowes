import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="h-screen w-full flex flex-col">
        <div className="flex justify-center">
          <h1 className="About-title text-5xl poppins-extrabold ">About Us</h1>
        </div>
        <div className="w-[50%] mx-auto my-5">
          <p className="poppins-regular">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero
            quaerat voluptates officiis earum sunt beatae numquam dolores! Illum
            fugiat earum dolor qui veniam? Minus est voluptatum ad dolorem
            laborum tempore dolor hic, possimus, magni eligendi modi facere
            consequatur perferendis quo aperiam. Est nulla, fugit blanditiis
            earum sit impedit minima!
          </p>
        </div>
        <div className="w-[70%] mx-auto my-5">
          <img
            src="/assets/About/About-img1.png"
            alt=""
            className="rounded-3xl"
          />
        </div>
        <div className="w-[70%] mx-auto mb-5 mt-8 flex">
          <div className="w-1/2 flex flex-col mt-4">
            <p className="poppins-medium text-3xl w-[70%]">
              “"Hidup seperti bersepeda: terus maju dan nikmati setiap
              kayuhannya." 🚴🌈”
            </p>
            <div className="poppins-medium text-3xl mt-3">- Gowes</div>
          </div>
          <div className="w-1/2">
            <img
              src="https://picsum.photos/600/300"
              alt=""
              className="rounded-3xl"
            />
          </div>
        </div>
        <div className="w-[70%] mx-auto my-5 flex">
          <div className="w-1/2 flex gap-8">
            <div className="w-1/2 flex flex-col gap-8">
              <img
                src="https://picsum.photos/300/310"
                alt=""
                className="rounded-3xl"
              />
              <img
                src="https://picsum.photos/320/410"
                alt=""
                className="rounded-3xl"
              />
            </div>
            <div className="w-1/2 flex items-center">
              <img
                src="https://picsum.photos/335/340"
                alt=""
                className="rounded-3xl w-80 h-96"
              />
            </div>
          </div>
          <div className="w-1/2 flex items-center pl-20">
            <div className="flex flex-col gap-5">
              <h1 className="About-title text-4xl poppins-bold ">More Info</h1>
              <p className="poppins-regular">
                Bersepeda bukan cuma sekadar olahraga, tapi juga cara untuk
                menikmati kebebasan, menjaga kesehatan, dan meredakan stres.
                Setiap kayuhan membuka peluang untuk mengeksplorasi tempat baru,
                menyatu dengan alam, dan memberikan energi positif. Selain bikin
                tubuh lebih bugar dan pikiran lebih tenang, bersepeda juga
                berarti kita peduli lingkungan dengan mengurangi polusi. Dan
                yang serunya, bersepeda hemat biaya! Jadi, ayo, hidupkan
                semangat di setiap pedalnya—temukan keseimbangan antara
                petualangan dan kesehatan! 🚴🌅
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
