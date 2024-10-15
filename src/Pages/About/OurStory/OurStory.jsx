import Foundation from "./Foundation";
import OurStoryPhoto from "./OurStoryPhoto";

const OurStory = () => {
    return (
        <>
        <div>
            <h1 className="text-6xl font-bold">Our Story</h1>
        </div>
        <div>
            <OurStoryPhoto></OurStoryPhoto>
            <Foundation></Foundation>
        </div>
            
        </>
    );
};

export default OurStory;