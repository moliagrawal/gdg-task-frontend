import React from "react";
import { default as statslogo } from "../assets/stats.svg"; 

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
    label: "Community Members", 
  },
  {
    id: 4,
    img: statslogo,
    value: "200+",
    label: "Attendees",
  },
];

const StatItem = ({ img, value, label }) => (
  <div className="flex flex-col items-center space-y-1"> 
    <div className="relative w-24 h-24 flex items-center justify-center rounded-full hover:shadow-xl transition-shadow duration-300"> 
      <img src={img} alt={label} className="w-full h-full object-contain rounded-full" />
      <span className="absolute top-1/2 transform -translate-y-1/2 text-3xl font-semibold text-[#5f5f5f]" style={{ fontFamily: 'Google Sans' }}> 
        {value}
      </span>
    </div>
    <p className="text-base text-[#5f5f5f] text-center font-medium whitespace-pre-line" style={{ fontFamily: 'Google Sans' }}> 
      {label}
    </p>
  </div>
);

const Stats = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-4">
      <div className="flex flex-wrap justify-center items-center">
        {stats.map((stat) => (
          <div key={stat.id} className="w-1/2 md:w-1/4 p-2 flex justify-center">
            <StatItem img={stat.img} value={stat.value} label={stat.label} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
