import OutputItem from "./ui/OutputItem";

function Output({ data }) {
  return (
    <div className="absolute top-[160px] 800:top-[250px] w-full flex justify-center z-50">
      <div className="bg-white grid grid-rows-4 800:flex text-center w-[330px] 500:w-[450px] rounded-[12px] py-6 800:py-9 gap-y-4 800:w-[80%] shadow-[5px_40px_20px_1px_rgba(0,0,0,0.1)]">
        <OutputItem
          heading={"IP ADDRESS"}
          data={data.ip !== undefined ? data.ip : ""}
        />

        <OutputItem
          heading={"LOCATION"}
          data={data.location !== undefined ? data.location.city : ""}
        />

        <OutputItem
          heading={"TIMEZONE"}
          data={data.location !== undefined ? data.location.timezone : ""}
        />

        <OutputItem
          heading={"ISP"}
          data={data.isp !== undefined ? data.isp : ""}
        />
      </div>
    </div>
  );
}

export default Output;
