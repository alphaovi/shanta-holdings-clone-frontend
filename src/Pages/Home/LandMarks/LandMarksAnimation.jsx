import { TypeAnimation } from "react-type-animation";

const LandMarksAnimation = () => {
  return (
    <div className="w-full sm:px-4 md:px-8 lg:px-16">
      <TypeAnimation
        style={{ whiteSpace: "pre-line", height: "195px", display: "block" }}
        sequence={[
          `Witness, As We\nTransform Your Land\nto a Landmark`,
          "",
        ]}
        repeat={Infinity}
      />
    </div>
  );
};

export default LandMarksAnimation;
