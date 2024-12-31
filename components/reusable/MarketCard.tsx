import Switch from "../Switch";

type TargetCardProps = {
  title: string;
  theme: "light" | "dark";
  isTargetPullUp: boolean;
  handleToggle: () => void;
  data: { label: string; value: string }[];
};

const TargetCard = ({
  title,
  theme,
  isTargetPullUp,
  handleToggle,
  data,
}: TargetCardProps) => (
  <div
    className={`${
      theme === "light"
        ? "bg-[#EEF2FE]"
        : "bg-[#5F5171] border-[#4B4868] shadow-[4px 4px 30px 0px #3D54AB24]"
    } rounded-xl w-full mt-5`}
  >
    <div className="flex justify-between items-center w-full px-3 pt-5">
      <h6
        className={`${
          theme === "light" ? "text-[#231F20]" : "text-white"
        } font-[OpenSauceMedium] text-sm font-medium`}
      >
        {title}
      </h6>
      <Switch onChange={handleToggle} checked={isTargetPullUp} />
    </div>

    <div className="w-full mt-3 px-3">
      {data.map((item, index) => (
        <div key={index} className="flex justify-between items-center py-2">
          <h6
            className={`font-poppins font-normal text-xs ${
              theme === "light" ? "text-[#636363]" : "text-white"
            }`}
          >
            {item.label}
          </h6>
          <p
            className={`font-[OpenSauceMedium] text-xs ${
              theme === "light" ? "text-black" : "text-[#636363]"
            }`}
          >
            {item.value}
          </p>
        </div>
      ))}
    </div>

    <div
      className={`${
        theme === "light" ? "bg-[#D0DAFF]" : "bg-[#807DA2]"
      } rounded-bl-xl rounded-br-xl w-full px-3 py-4 flex justify-center items-center gap-4`}
    >
      <div className="flex justify-start items-center gap-1 ">
        <img
          src="./live-dot.svg"
          className=" w-4 h-4 object-cover"
          alt="live"
        />
        <p
          className={`${
            theme === "light" ? "text-[#363636]" : "text-white"
          } font-[OpenSauceRegular] font-normal text-xs`}
        >
          Not Executed
        </p>
      </div>
      <p
        className={`${
          theme === "light" ? "text-[#5820FF]" : "text-white"
        } font-[OpenSauceRegular] font-normal text-xs`}
      >
        Modify Parameters
      </p>
    </div>
  </div>
);

export default TargetCard;
