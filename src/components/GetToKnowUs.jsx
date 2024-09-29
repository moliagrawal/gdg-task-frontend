import React from 'react';
import { default as mission } from "../assets/mission.svg";
import { default as perspective } from "../assets/perspective.svg";
import { default as going } from "../assets/going.svg";

const sections = [
    {
        title: 'Our Mission',
        content:
            'Our mission involves community engagement, leadership development, building strong tech foundation, while enabling all tech enthusiasts to contribute to the global society.',
        image: mission,
        color: 'border-blue-500',
        underlineColor: 'bg-blue-500',
        contentAlignment: 'text-right',
        reverseSidebar: true
    },
    {
        title: 'Our Perspective',
        content:
            "We're a community-driven initiative aiming to bridge the gap between research and practice, develop evolutionary thinking, and network throughout the process. We believe in connecting fellow developers, spreading stimulative ideas, and working for a solution-driven team.",
        image: perspective,
        color: 'border-green-500',
        underlineColor: 'bg-green-500',
        contentAlignment: 'text-left',
    },
    {
        title: 'What Keeps Us Going?',
        content:
            'Our club helps students to connect, learn, empower, and grow. Teamwork, innovative thinking, communication, and leading with solutions is what helps us achieve new heights. \nThe entire team works in coordination to inspire and motivate the upcoming coding community to evolve their skills and broaden their horizons of knowledge.',
        image: going,
        color: 'border-yellow-500',
        underlineColor: 'bg-yellow-500',
        contentAlignment: 'text-right',
        reverseSidebar: true
    },
];

const GetToKnowUs = () => {
    return (
        <div id="mission-section" className="container mx-auto p-5 space-y-20">
            {/* Main Heading */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold">Get to know us!</h2>
            </div>

            {/* Sections */}
            {sections.map((section, index) => (
                <div key={index} className="flex flex-col items-center space-y-10 w-full">
                    {/* Section Title */}
                    <div className="text-center w-full mb-8">
                        <h2 className="text-3xl font-bold">{section.title}</h2>
                        <div className={`h-1 w-16 ${section.underlineColor} mt-2 mx-auto`}></div>
                    </div>

                    {/* Section Content */}
                    <div
                        className={`flex flex-col md:flex-row items-center md:space-x-0 space-y-5 md:space-y-0 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                            } w-full bg-white rounded-lg p-5 shadow-md`}
                    >
                        <div className="w-full md:w-1/2 p-5">
                            <img
                                src={section.image}
                                alt={section.title}
                                className="w-full rounded-md"
                            />
                        </div>
                        <div className={`w-full md:w-1/2 p-5 ${section.reverseSidebar ? 'border-r-4' : 'border-l-4'} ${section.color} pl-4 ${section.contentAlignment}`}>
                            <p className="text-gray-700 text-lg whitespace-pre-line">{section.content}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GetToKnowUs;
