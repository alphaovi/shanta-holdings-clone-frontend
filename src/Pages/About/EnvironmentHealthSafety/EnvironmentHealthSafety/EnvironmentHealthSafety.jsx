import EnvironmentalProtection from "../EnvironmentalProtection/EnvironmentalProtection";
import EnvironmentHealthSafetyFront from "../EnvironmentHealthSafetyFront/EnvironmentHealthSafetyFront";
import HealthHygiene from "../HealthHygiene/HealthHygiene";
import Safety from "../Safety/Safety";

const EnvironmentHealthSafety = () => {
    return (
        <div>
            <EnvironmentHealthSafetyFront></EnvironmentHealthSafetyFront>
            <EnvironmentalProtection></EnvironmentalProtection>
            <HealthHygiene></HealthHygiene>
            <Safety></Safety>
        </div>
    );
};

export default EnvironmentHealthSafety;