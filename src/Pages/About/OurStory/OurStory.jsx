import Foundation from "./Foundation";
import OurLogoRationale from "./OurLogoRationale";
import OurStoryPhoto from "./OurStoryPhoto";
import WhoWeAre from "./WhoWeAre";

const OurStory = () => {
    return (
        <>
        <div>
            <h1 className="text-8xl font-bold text-center text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">Our Story</h1>
        </div>
        <div>
            <OurStoryPhoto></OurStoryPhoto>
            <Foundation></Foundation>
            <WhoWeAre></WhoWeAre>
            <OurLogoRationale></OurLogoRationale>
        </div>
            
        </>
    );
};

export default OurStory;