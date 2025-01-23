import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import useInvestmentPhoto from "../../../Hooks/useInvestmentPhoto";

const AdminInvestmentPhoto = () => {
  const [photos, setPhotos] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [message, setMessage] = useState("");

  // Get the investment photo from the database using custom hooks
  const [investmentPhotos, isLoading] = useInvestmentPhoto();

  // Handle file change selection and preview
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setPhotos(files);

    const previewUrls = files.map((file) => URL.createObjectURL(file));
    setPreviewUrls(previewUrls);
  };

  const handleAddPhotos = async () => {
    if (photos.length === 0) {
      setMessage("Please select photos to upload");
      toast.error("Please select photos to upload");
      return;
    }
  
    try {
      setMessage("Uploading photos...");
      toast.loading("Uploading photos...");
  
      for (const photo of photos) {
        const formData = new FormData();
        formData.append("image", photo);
  
        const imgbbAPIKey = "9f989d9dc9f26cdee1f0e39188190099";
        const imgbbResponse = await axios.post(
          `https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`,
          formData
        );
  
        if (imgbbResponse.data?.data?.url) {
          const investmentImage = imgbbResponse.data.data.url; // Get the direct URL
          console.log("Uploading to the database:", investmentImage); // Debug
          await saveToDatabase(investmentImage); // Save each photo individually
        } else {
          console.error("Invalid imgbb response:", imgbbResponse.data);
          toast.error("Failed to upload image to imgbb");
        }
      }
  
      setMessage("Photos uploaded successfully");
      toast.dismiss();
      toast.success("Photos uploaded successfully");
    } catch (error) {
      console.error("Error during photo upload:", error);
      setMessage("Failed to upload photos. Please try again.");
      toast.error("Failed to upload photos.");
    }
  };
  

  const saveToDatabase = async (investmentImage) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/investmentPhoto/investmentPhoto",
        { investmentImage }
      );
      toast.success("Successfully saved photo to the database");
    } catch (error) {
      console.error("Failed to save to the database:", error);
      setMessage("Failed to save photo to the database");
      toast.error("Failed to save photo to the database");
    }
  };

  return (
    <div className="border border-gray-400 p-5 mb-10 rounded">
      <p className="font-bold mb-5">Photos</p>

      <div className="grid grid-cols-4 gap-4 my-5">
        {investmentPhotos.map((investmentPhoto, index) => (
          <img
            key={index}
            src={investmentPhoto.investmentImage}
            alt="Investment Photo"
          />
        ))}
      </div>

      {previewUrls.length > 0 && (
        <div>
          <p>Image previews:</p>
          <div className="grid grid-cols-4 gap-4">
            {previewUrls.map((url, index) => (
              <img key={index} src={url} alt={`Selected ${index}`} className="w-60 h-60 my-5" />
            ))}
          </div>
        </div>
      )}
      <input type="file" multiple onChange={handleFileChange} />
      <br />
      <button
        onClick={handleAddPhotos}
        className="btn btn-primary mt-5 text-white bg-[#8E8A20] hover:bg-[#8d8a31] border-none transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      >
        Add Photos
      </button>
      {message && <p className="mt-3 text-red-700">{message}</p>}
    </div>
  );
};

export default AdminInvestmentPhoto;
