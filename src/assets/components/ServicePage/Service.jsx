import React from "react";
import ServiceCard from "./ServiceCard";
import "./Service.css";

const OPTIONS = { loop: true };
const SLIDES = [
  {
    title: "Kegiatan 1",
    url: "https://picsum.photos/400/300?random=10",
  },
  {
    title: "Kegiatan 2",
    url: "https://picsum.photos/400/300?random=11",
  },
  {
    title: "Kegiatan 3",
    url: "https://picsum.photos/400/300?random=12",
  },
  {
    title: "Kegiatan 4",
    url: "https://picsum.photos/400/300?random=13",
  },
  {
    title: "Kegiatan 5",
    url: "https://picsum.photos/400/300?random=14",
  },
  {
    title: "Kegiatan 6",
    url: "https://picsum.photos/400/300?random=15",
  },
  {
    title: "Kegiatan 7",
    url: "https://picsum.photos/400/300?random=16",
  },
  {
    title: "Kegiatan 8",
    url: "https://picsum.photos/400/300?random=17",
  },
  {
    title: "Kegiatan 9",
    url: "https://picsum.photos/400/300?random=18",
  },
];

const Service = () => {
  return (
    <div>
      <div className="flex justify-center mb-10">
        <h1 className="Service-title text-5xl poppins-extrabold">Service</h1>
      </div>
      <div className="bg-[#D9D9D9] w-full py-11">
        <ServiceCard slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
};

export default Service;
