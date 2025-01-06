import { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import YouTube from "react-youtube";
import { DarkModeContext } from "../../../../Contexts/NightLightContext";
import toast from "react-hot-toast";
import axios from "axios";
import { GoMute, GoUnmute } from "react-icons/go";

const ExploreVideos = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isMute, setIsMute] = useState(true);
  const { darkMode } = useContext(DarkModeContext);

  const fetchVideos = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://shanti-holdings-backend.vercel.app/api/v1/explore-project/explore-project"
      );
      console.log(response.data);
      setVideos(response.data.data || []); // Ensure videos is an array
    } catch (error) {
      console.error("Error fetching videos:", error);
      toast.error("Failed to fetch videos");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const extractYouTubeID = (url) => {
    const match = url?.match(
      /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/\?v=))([^&?\/\s]{11})/
    );
    return match ? match[1] : null;
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    fade: true,
    arrows: false,
  };

  const videoOptions = (videoId) => ({
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      mute: isMute ? 1 : 0,
      controls: 0,
      loop: 1,
      playlist: videoId,
    },
  });

  const toggleMute = () => setIsMute((prev) => !prev);

  return (
    <div
      className="scrollable-element mx-auto font-familyPortfolio"
      style={{
        width: "100%",
        height: "90vh", // Increased height for larger videos
      }}
    >
      {isLoading ? (
        <p>Loading videos...</p>
      ) : (
        <Slider {...sliderSettings}>
          {videos.map((video) => {
            const videoId = extractYouTubeID(video.url);
            return (
              <div
                key={video._id}
                className="relative w-full h-full overflow-hidden"
                style={{ height: "100%" }}
              >
                <YouTube
                  videoId={videoId}
                  opts={videoOptions(videoId)}
                  className="w-full lg:h-[650px]"
                  containerClassName="youtube-container" // Add container class if needed
                />
                <h1
                  className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-50 ${
                    darkMode ? "exploreWordDesign" : "exploreWordDesignForLight"
                  }`}
                >
                  {video.name}
                </h1>
                <button
                  onClick={toggleMute}
                  className="absolute bottom-4 right-4  text-white px-4 py-2 rounded"
                >
                  {isMute ? (
                    <GoMute className="border rounded-full w-16 h-16 p-2" />
                  ) : (
                    <GoUnmute className="border rounded-full w-16 h-16 p-2 " />
                  )}
                </button>
              </div>
            );
          })}
        </Slider>
      )}
    </div>
  );
};

export default ExploreVideos;
