import ProgressBar from "components/progressbar";

export default function ItemProficiency({ item, proficiency }) {
  return (
    <div className=" w-full py-1">
      <div className="flex  justify-between text-gray-300">
        <span className="text-gray-300 mr-24 md:mr-36">{item}</span>
        {/* <span className="opacity-20" title={`${proficiency}% proficient`}>{proficiency}%</span> */}
      </div>
      {/* <ProgressBar progress={proficiency} /> */}
    </div>
  );
}
