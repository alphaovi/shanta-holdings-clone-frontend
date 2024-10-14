import LetConnect from "../Connect/LetConnect";
import Explores from "../Explores/Explores";
import FeatureProject from "../FeatureProjects/FeatureProject/FeatureProject";
import HeaderAndPhotos from "../HeaderAndPhotos/HeaderAndPhotos";
import LandMarks from "../LandMarks/LandMarks";
import LandMarksDetailsAndPhotos from "../LandMarksDetailsAndPhotos/LandMarksDetailsAndPhotos";
import Portfolio from "../Portfolio/Portfolio";
import ProfessionalManagement from "../ProfessionalManagement/ProfessionalManagement";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <div>
      <HeaderAndPhotos></HeaderAndPhotos>
      <Portfolio></Portfolio>
      <ProfessionalManagement></ProfessionalManagement>
      <FeatureProject></FeatureProject>
      <LandMarks></LandMarks>
      <LandMarksDetailsAndPhotos></LandMarksDetailsAndPhotos>
      <Projects></Projects>
      <Explores></Explores>
      <LetConnect></LetConnect>
    </div>
  );
};

export default Home;
