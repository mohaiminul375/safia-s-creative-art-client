import { Typewriter } from "react-simple-typewriter";

const Banner2 = () => {
  return (
    <div>
      <div className="bg-[#001220] h-[100px] text-white flex justify-center items-center">
        <h3 className="text-2xl">
          <Typewriter
            cursor
            cursorBlinking
            delaySpeed={1000}
            deleteSpeed={25}
            loop={0}
            typeSpeed={75}
            words={[
              "Hello World",
              "Welcome to",
              "React Simple Typewriter",
              "A Simple React Component/Hook for adding a nice Typewriter effect to your project.",
            ]}
          />
        </h3>
      </div>
    </div>
  );
};

export default Banner2;
