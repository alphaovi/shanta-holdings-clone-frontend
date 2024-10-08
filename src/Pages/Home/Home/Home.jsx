import FeatureProjects from "../FeatureProjects/FeatureProjects";
import HeaderAndPhotos from "../HeaderAndPhotos/HeaderAndPhotos";
import LandMarks from "../LandMarks/LandMarks";
import LandMarksDetailsAndPhotos from "../LandMarksDetailsAndPhotos/LandMarksDetailsAndPhotos";
import Portfolio from "../Portfolio/Portfolio";
import ProfessionalManagement from "../ProfessionalManagement/ProfessionalManagement";

const Home = () => {
  return (
    <div>
      <HeaderAndPhotos></HeaderAndPhotos>
      <Portfolio></Portfolio>
      <ProfessionalManagement></ProfessionalManagement>
      <FeatureProjects></FeatureProjects>
      <LandMarks></LandMarks>
      <LandMarksDetailsAndPhotos></LandMarksDetailsAndPhotos>
    </div>
  );
};

export default Home;
