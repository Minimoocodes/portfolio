import phone from "../assets/img/about/phone.svg";
import location from "../assets/img/about/location.svg";
import envelope from "../assets/img/about/envelope.svg";
import user_icon from "../assets/img/about/user_icon.svg";
import github from "../assets/img/about/github.png";
import linkedin from "../assets/img/about/linkedin.png";
import file from "../assets/img/about/file.svg";
import question from "../assets/img/about/question.svg";
import React from "react";

const about = [
  {
    src: user_icon,
    alt: "name icon",
    title: "Name",
    text: "Jaemin Shim",
  },
  {
    src: phone,
    alt: "phone icon",
    title: "Phone Number",
    text: "073-268-1131",
  },
  {
    src: envelope,
    alt: "email icon",
    title: "Email",
    text: "jaemin.shim14@gmail.com",
  },
  {
    src: location,
    alt: "location icon",
    title: "Location",
    text: "Stockholm",
  },
  {
    src: github,
    alt: "Github icon",
    title: "Github",
    text: "Stockholm",
  },
  {
    src: linkedin,
    alt: "LinkedIn icon",
    title: "LinkedIn",
    text: "LinkedIn",
  },
  {
    src: file,
    alt: "CV icon",
    title: "CV",
    text: "CV_Jaemin Shim",
  },
  {
    src: question,
    alt: "question icon",
    title: "Know more",
    text: "Let's set up a meeting!",
  },
];
const About = React.forwardRef(({ aboutRef }, ref) => {
  return (
    <div ref={ref} className="max-w-[1240px] mx-auto my-10">
      <div className="flex items-center gap-2">
        <img
          src="https://icons.veryicon.com/png/o/miscellaneous/member-circle-im/about-12.png"
          width={40}
        />
        <h2 className="md:text-2xl sm:text-2lg text-xl font-bold">ABOUT</h2>
      </div>
      <div className="my-5">
        <p className="p-2 my-2 md:text-lg sm:text-md text-lg">
          Hi! I am looking for an internship starting September 2024 as part of
          my Frontend Developer class at Hyper Island. The skills I've acquired
          during the past 8 months is in the below, and now I plan to add
          Next.js, Typescript on top of it by September.
          {/* I am originally from Korea, studied in the US, lived in Dubai until I
          got here to Sweden. Throughout the time, I worked in aviation, luxury
          retail, and marketing. I was trained to be time-managing and
          stress-handling throughout my daily schedule during my flight
          attendant career. Eye for design and entreprenuer mindset has deeply
          rooted into me from the luxury retail, which enhanced my creative side
          and data-driven side in my marketing career. */}
        </p>
        <ul className="grid gap-2 justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
          {about.map((item, index) => (
            <li
              key={index}
              className="p-4 flex gap-4 shadow rounded-md shadow-indigo-500/40"
            >
              <img src={item.src} alt={item.alt} className="h-8 mt-2" />
              <div>
                <h2 className="font-bold">{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default About;
