import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div>
      <div className="max-x-[800px] mt-[96px] w-full h-[50vh] mx-auto text-center flex flex-col justify-center">
        <p className="text-[skyblue] font-bold p-2 text-xl md:text-2xl sm:text-3xl">
          Growing
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Frontend Developer
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">I am</p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold pl-2"
            strings={[
              "International",
              "Goal-Oriented",
              "Always learning",
              "Solution-finding",
              "Always looking for challenge",
              "structured",
              "Passionate",
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        {/* <p className="md:text-2xl text-xl font-old text-[skyblue] w-80 text">
          Hi! I am a soon to be Frontend Developer with background in aviation,
          luxury retail, and marketing. I truly believe that Frontend developer
          is a job where I can shine with the skills I have acquired throughout
          my career.
        </p> */}
      </div>
    </div>
  );
};

export default Hero;
