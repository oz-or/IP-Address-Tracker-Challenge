import SmallHeading from "./SmallHeading";
import OutputData from "./OutputData";

function OutputItem({ heading, data }) {
  return (
    <div className="flex flex-col 800:border-l-[0.25px]  800:w-1/4 800:px-3 800:text-start">
      <SmallHeading>{heading}</SmallHeading>
      <OutputData>{data}</OutputData>
    </div>
  );
}

export default OutputItem;
