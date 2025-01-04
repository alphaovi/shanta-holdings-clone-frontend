import axios from "axios";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const AdminOurTeam = () => {
  const [teamData, setTeamData] = useState({
    teamCoverPhoto: "",
    managingDirectorName: "",
    managingDirectorDetails: "",
    managingDirectorImage: "",
    ceoName: "",
    ceoPhoto: "",
    ceoAbout: "",
    ceoAboutMore: "",
    fullTeamImage: "",
    fullTeamDescriptionOne: "",
    fullTeamDescriptionTwo: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [previewImages, setPreviewImages] = useState({}); // Holds previews of fetched and selected images

  const fileInputRefs = {
    teamCoverPhoto: useRef(null),
    managingDirectorImage: useRef(null),
    ceoPhoto: useRef(null),
    fullTeamImage: useRef(null),
  };

  // Fetch team data from the database
  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/team-member/team-member"
        );
        const loadedData = response.data.data;
        setTeamData(loadedData);

        // Set previews for images fetched from the database
        const initialPreviews = {
          teamCoverPhoto: loadedData.teamCoverPhoto,
          managingDirectorImage: loadedData.managingDirectorImage,
          ceoPhoto: loadedData.ceoPhoto,
          fullTeamImage: loadedData.fullTeamImage,
        };
        setPreviewImages(initialPreviews);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch team data");
      }
    };

    fetchedData();
  }, []);

  // Upload image to Imgbb
  const uploadImageToImgbb = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=9f989d9dc9f26cdee1f0e39188190099`,
        formData
      );
      return response.data.data.url;
    } catch (error) {
      console.error(error);
      toast.error("Image upload error");
      return null;
    }
  };

  // Handle image changes
  const handleImageChange = async (field) => {
    const file = fileInputRefs[field].current?.files[0];

    if (file) {
      const previewUrl = URL.createObjectURL(file); // Create a preview URL
      setPreviewImages((prev) => ({ ...prev, [field]: previewUrl })); // Update preview

      const uploadedUrl = await uploadImageToImgbb(file); // Upload to Imgbb
      if (uploadedUrl) {
        setTeamData((prevState) => ({
          ...prevState,
          [field]: uploadedUrl,
        }));
      }
    }
  };

  // Update team data
  const handleTeamUpdate = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.patch(
        "http://localhost:5000/api/v1/team-member/team-member",
        teamData
      );

      if (response.status === 200) {
        toast.success("Updated team data successfully");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update team data");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-center mb-10">Our Team</h1>

        <form onSubmit={handleTeamUpdate} className="space-y-4">
          <div className="space-y-4 space-x-5 grid lg:grid-cols-2 justify-around">
            {/* Team Cover Photo */}
            <div>
              <label>Cover Image</label>
              {previewImages.teamCoverPhoto && (
                <img
                  src={previewImages.teamCoverPhoto}
                  alt="Cover Preview"
                  className="w-40 h-40 object-cover mb-4"
                />
              )}
              <input
                type="file"
                ref={fileInputRefs.teamCoverPhoto}
                className="border border-gray-300 rounded w-full p-2"
                onChange={() => handleImageChange("teamCoverPhoto")}
              />
            </div>

            {/* Managing Director Name */}
            <div>
              <label>Managing Director Name</label>
              <input
                type="text"
                className="border border-gray-300 rounded w-full p-2"
                value={teamData.managingDirectorName}
                onChange={(e) =>
                  setTeamData({
                    ...teamData,
                    managingDirectorName: e.target.value,
                  })
                }
              />
            </div>

            {/* Managing Director Details */}
            <div>
              <label>Managing Director Details</label>
              <textarea
                className="textarea textarea-bordered h-40 w-full"
                value={teamData.managingDirectorDetails}
                onChange={(e) =>
                  setTeamData({
                    ...teamData,
                    managingDirectorDetails: e.target.value,
                  })
                }
              ></textarea>
            </div>

            {/* Managing Director Image */}
            <div>
              <label>Managing Director Image</label>
              {previewImages.managingDirectorImage && (
                <img
                  src={previewImages.managingDirectorImage}
                  alt="MD Preview"
                  className="w-40 h-40 object-cover mb-4"
                />
              )}
              <input
                type="file"
                ref={fileInputRefs.managingDirectorImage}
                className="border border-gray-300 rounded w-full p-2"
                onChange={() => handleImageChange("managingDirectorImage")}
              />
            </div>

            {/* CEO Name */}
            <div>
              <label>CEO Name</label>
              <input
                type="text"
                className="border border-gray-300 rounded w-full p-2"
                value={teamData.ceoName}
                onChange={(e) =>
                  setTeamData({
                    ...teamData,
                    ceoName: e.target.value,
                  })
                }
              />
            </div>

            {/* CEO Photo */}
            <div>
              <label>CEO Photo</label>
              {previewImages.ceoPhoto && (
                <img
                  src={previewImages.ceoPhoto}
                  alt="CEO Preview"
                  className="w-40 h-40 object-cover mb-4"
                />
              )}
              <input
                type="file"
                ref={fileInputRefs.ceoPhoto}
                className="border border-gray-300 rounded w-full p-2"
                onChange={() => handleImageChange("ceoPhoto")}
              />
            </div>

            {/* CEO About */}
            <div>
              <label>CEO About</label>
              <textarea
                className="textarea textarea-bordered h-40 w-full"
                value={teamData.ceoAbout}
                onChange={(e) =>
                  setTeamData({
                    ...teamData,
                    ceoAbout: e.target.value,
                  })
                }
              ></textarea>
            </div>

            {/* Full Team Image */}
            <div>
              <label>Full Team Image</label>
              {previewImages.fullTeamImage && (
                <img
                  src={previewImages.fullTeamImage}
                  alt="Team Preview"
                  className="w-40 h-40 object-cover mb-4"
                />
              )}
              <input
                type="file"
                ref={fileInputRefs.fullTeamImage}
                className="border border-gray-300 rounded w-full p-2"
                onChange={() => handleImageChange("fullTeamImage")}
              />
            </div>

            {/* Full Team Description One */}
            <div>
              <label>Full Team Description One</label>
              <textarea
                className="textarea textarea-bordered h-40 w-full"
                value={teamData.fullTeamDescriptionOne}
                onChange={(e) =>
                  setTeamData({
                    ...teamData,
                    fullTeamDescriptionOne: e.target.value,
                  })
                }
              ></textarea>
            </div>

            {/* Full Team Description Two */}
            <div>
              <label>Full Team Description Two</label>
              <textarea
                className="textarea textarea-bordered h-40 w-full"
                value={teamData.fullTeamDescriptionTwo}
                onChange={(e) =>
                  setTeamData({
                    ...teamData,
                    fullTeamDescriptionTwo: e.target.value,
                  })
                }
              ></textarea>
            </div>
          </div>

          <div className="space-y-4 space-x-5 grid lg:grid-cols-2 justify-around">
            <input
              className="btn btn-secondary bg-[#8E8A20] hover:bg-lime-900 border-none"
              type="submit"
              value="Update Our Team"
              disabled={isLoading}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminOurTeam;
