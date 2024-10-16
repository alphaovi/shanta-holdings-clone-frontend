import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

const Value = ({value}) => {
    const {title, detail} = value;
  return (
    <div>
      <h3 className="text-xl flex">
        {title} <CiCirclePlus />
        <CiCircleMinus />
      </h3>
      <p>
        {detail}
      </p>
    </div>
  );
};

export default Value;