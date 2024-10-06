import FeatureProjects from "../FeatureProjects/FeatureProjects";
import HeaderAndPhotos from "../HeaderAndPhotos/HeaderAndPhotos";
import Portfolio from "../Portfolio/Portfolio";
import ProfessionalManagement from "../ProfessionalManagement/ProfessionalManagement";

const Home = () => {
  return (
    <div>
      <HeaderAndPhotos></HeaderAndPhotos>
      <Portfolio></Portfolio>
      <ProfessionalManagement></ProfessionalManagement>
      <FeatureProjects></FeatureProjects>
    </div>
  );
};

export default Home;
