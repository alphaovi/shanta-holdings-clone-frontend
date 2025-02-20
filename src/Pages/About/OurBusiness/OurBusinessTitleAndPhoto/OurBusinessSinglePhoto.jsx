const OurBusinessSinglePhoto = ({ ourBusinessPhoto }) => {
  const { name, image } = ourBusinessPhoto;

  return (
    <div className="">
      <img src={image} alt="Business Photo" className="w-full h-full" />
    </div>
  );
};

export default OurBusinessSinglePhoto;
