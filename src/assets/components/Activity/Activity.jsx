import React from "react";
import ActivityCard from "./ActivityCard";
import "./Activity.css";

const OPTIONS = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Activity = () => {
  return (
    <div>
      <h1 className="Activity-title text-5xl poppins-extrabold">Activity</h1>
      <ActivityCard slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default Activity;
