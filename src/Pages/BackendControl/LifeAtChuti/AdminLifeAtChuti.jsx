import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AdminLifeAtChuti = () => {
  const [lifeAtChutiData, setLifeAtChutiData] = useState(null); // Store life-at-chuti data
  const [description, setDescription] = useState("");
  const [previewImages, setPreviewImages] = useState(null); // For image preview
  const [imageUrl, setImageUrl] = useState(""); // Store ImgBB URL

  // Get the data from backend
  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await axios.get(
          `https://chutiharmony-server.vercel.app/api/v1/life-at-chuti/life-at-chuti`
        );
        if (response.data.data) {
          const loadedData = response.data.data;
          setLifeAtChutiData(loadedData);
          setDescription(loadedData.descriptionAboutChutiTeam); // Set initial description

          if (loadedData.cover) {
            setPreviewImages(loadedData.cover); // Set initial image from database
            setImageUrl(loadedData.cover); // Use the existing image URL from DB
          }
        }
      } catch (error) {
        console.log(error);
        toast.error("Error loading data");
      }
    };
    fetchedData();
  }, []);

  // Upload Image to ImgBB
  const uploadImageToImgbb = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=9f989d9dc9f26cdee1f0e39188190099`, // Your ImgBB key
        formData
      );
      if (response.data.success) {
        return response.data.data.url;
      } else {
        toast.error("Failed to upload image");
        return null;
      }
    } catch (error) {
      console.log(error);
      toast.error("Error uploading image to ImgBB");
      return null;
    }
  };

  // Handle image change
  const handleImageChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      // Preview Image
      const previewUrl = URL.createObjectURL(file);
      setPreviewImages(previewUrl);

      // Upload to ImgBB and get the URL
      const uploadedUrl = await uploadImageToImgbb(file);
      if (uploadedUrl) {
        setImageUrl(uploadedUrl); // Store the ImgBB URL
      }
    }
  };

  // Handle life-at-chuti update
  const handleLifeAtChutiUpdate = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("descriptionAboutChutiTeam", description);

    // If a new image is uploaded, use the new image URL
    if (imageUrl && imageUrl !== lifeAtChutiData.cover) {
      formData.append("coverPhoto", imageUrl); // Append the new image URL
    }

    try {
      const response = await axios.patch(
        `https://chutiharmony-server.vercel.app/api/v1/life-at-chuti/life-at-chuti`,
        formData
      );

      if (response.data) {
        toast.success("Successfully updated your document");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to update your document");
    }
  };

  return (
    <section>
      <div>
        <h1 className="text-4xl font-bold text-center underline">
          Life at Chuti
        </h1>
        <div className="mt-10">
          <form onSubmit={handleLifeAtChutiUpdate}>
            <p className="mb-5 font-bold">Life At Chuti Cover Photo</p>
            {/* Show preview image or image from the database */}
            {previewImages && (
              <img className="h-52 my-5" src={previewImages} alt="Preview" />
            )}
            <input type="file" onChange={handleImageChange} />
            <p className="mb-2 mt-5 font-bold">
              Description About Life At Chuti
            </p>
            <textarea
              onChange={(event) => setDescription(event.target.value)}
              value={description || ""}
              className="w-[30rem] border-2 border-gray-700 h-52 p-2"
            />
            <div>
              <input
                type="submit"
                value="Update Life At Chuti"
                className="btn btn-success text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AdminLifeAtChuti;
