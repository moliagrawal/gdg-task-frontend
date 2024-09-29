import React from "react";
import { default as statslogo } from "../assets/stats.svg"; // Ensure this is the correct path

// Data for stats
const stats = [
  {
    id: 1,
    img: statslogo,
    value: "03+",
    label: "Years",
  },
  {
    id: 2,
    img: statslogo,
    value: "10+",
    label: "Events",
  },
  {
    id: 3,
    img: statslogo,
    value: "1K+",
    label: "Community\nMembers", // Adding line break in the data
  },
  {
    id: 4,
    img: statslogo,
    value: "200+",
    label: "Attendees",
  },
];

// Component for individual stat item
const StatItem = ({ img, value, label }) => (
  <div className="flex flex-col items-center space-y-1"> {/* Space between circle and label */}
    <div className="relative w-24 h-24 flex items-center justify-center"> {/* Circle size */}
      <img src={img} alt={label} className="w-full h-full object-contain" />
      <span className="absolute top-1/2 transform -translate-y-1/2 text-3xl font-semibold text-gray-800"> {/* Text centering */}
        {value}
      </span>
    </div>
    <p className="text-base text-gray-600 text-center font-medium whitespace-pre-line"> {/* Increased label text size */}
      {label}
    </p>
  </div>
);

// Main Stats component using Flexbox
const Stats = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-4"> {/* Removed horizontal margins */}
      <div className="flex flex-wrap justify-center items-center"> {/* Flexbox layout */}
        {stats.map((stat) => (
          <div key={stat.id} className="w-1/2 md:w-1/4 p-2 flex justify-center"> {/* Flexbox columns */}
            <StatItem img={stat.img} value={stat.value} label={stat.label} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
