import React from "react";
import ActivityCard from "./ActivityCard";
import "./Activity.css";

const OPTIONS = { loop: true };
const SLIDES = [
  {
    title: "Kegiatan 1",
    url: "https://picsum.photos/400/300?random=1",
  },
  {
    title: "Kegiatan 2",
    url: "https://picsum.photos/400/300?random=2",
  },
  {
    title: "Kegiatan 3",
    url: "https://picsum.photos/400/300?random=3",
  },
  {
    title: "Kegiatan 4",
    url: "https://picsum.photos/400/300?random=4",
  },
  {
    title: "Kegiatan 5",
    url: "https://picsum.photos/400/300?random=5",
  },
  {
    title: "Kegiatan 6",
    url: "https://picsum.photos/400/300?random=6",
  },
  {
    title: "Kegiatan 7",
    url: "https://picsum.photos/400/300?random=7",
  },
  {
    title: "Kegiatan 8",
    url: "https://picsum.photos/400/300?random=8",
  },
  {
    title: "Kegiatan 9",
    url: "https://picsum.photos/400/300?random=9",
  },
];

const Activity = () => {
  return (
    <div>
      <div className="flex justify-center mb-10">
        <h1 className="Activity-title text-5xl poppins-extrabold">Activity</h1>
      </div>
      <ActivityCard slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default Activity;
