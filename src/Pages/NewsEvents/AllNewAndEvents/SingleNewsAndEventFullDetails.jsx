import { useContext } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useSingleNewsEventDetails from "../../../Hooks/useSingleNewsEventDetails";
import { DarkModeContext } from "../../../Contexts/NightLightContext";
import Loading from "../../../Shared/Loading/Loading";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Ensure autoplay CSS is imported
import { Link } from "react-router-dom";

const SingleNewsAndEventFullDetails = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [singleNewsEventDetail, isLoading, error] = useSingleNewsEventDetails();

  if (isLoading) return <Loading></Loading>;
  if (error) return <div>Error: {error.message}</div>;

  // Debugging: Check if photos are loaded
  console.log("Photos:", singleNewsEventDetail.photos);

  return (
    <section
      className={`${
        darkMode ? "bg-black text-white" : "bg-[#FFFAF4] text-black"
      } px-40 font-serif`}
    >
      <div>
        <h1 className="text-gray-500">News & Event</h1>
        <h1 className="text-4xl uppercase">{singleNewsEventDetail.title}</h1>
        <p className="my-5">{singleNewsEventDetail.date}</p>
        <div className="border border-gray-500 mb-5"></div>
        <img
          src={singleNewsEventDetail.coverphoto}
          alt="Cover"
          className="w-full h-auto"
        />
        <Link to={singleNewsEventDetail.newsEventSourceLink}><p className="my-5 text-xl">
          Source:{" "}
          <span className="text-[#8F8933] tracking-wide">
            {" "}
            {singleNewsEventDetail.source}
          </span>
        </p></Link>
        <p className="text-xl">
          Date: <span className="ml-2">{singleNewsEventDetail.date}</span>
        </p>
        <p className="mt-5 text-lg">{singleNewsEventDetail.description1}</p>
        <p className="mt-5 text-lg">{singleNewsEventDetail.description2}</p>
        <p className="mt-5 text-lg">{singleNewsEventDetail.description3}</p>
        <p className="mt-5 text-lg">{singleNewsEventDetail.description4}</p>
        <p className="mt-5 text-lg">{singleNewsEventDetail.description5}</p>
        <p className="mt-5 text-lg">{singleNewsEventDetail.description6}</p>
        <p className="mt-5 text-lg">{singleNewsEventDetail.description7}</p>
        <p className="mt-5 text-lg">{singleNewsEventDetail.description8}</p>

        {/* Swiper for Photos */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-5">Photos</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={3}
            navigation
            autoplay={{
              delay: 2500, // Autoplay delay in milliseconds
              disableOnInteraction: false, // Continue autoplay after user interaction
            }}
            pagination={{ clickable: true }}
            loop={true}
          >
            {singleNewsEventDetail.photos.map((photo, index) => (
              <SwiperSlide key={index}>
                <img
                  src={photo}
                  alt={`Photo ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SingleNewsAndEventFullDetails;