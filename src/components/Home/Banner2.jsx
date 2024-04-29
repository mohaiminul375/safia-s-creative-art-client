import { Typewriter } from "react-simple-typewriter";

const Banner2 = () => {
  return (
    <div>
      <div className="bg-[#001220] h-[100px] text-white flex justify-center items-center">
        <h3 className="text-2xl font-khand">
          <Typewriter
            cursor
            cursorBlinking
            delaySpeed={1000}
            deleteSpeed={25}
            loop={0}
            typeSpeed={75}
            words={[
              "Welcome to Safia's Creative Art Studio",
              'Visit our website and explore our beautiful collection',
              "And",
              "Join with us and showcase your creativity"
            ]}
          />
        </h3>
      </div>
    </div>
  );
};

export default Banner2;
