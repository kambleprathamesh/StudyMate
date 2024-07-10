
function ToggleButton({ tabData, field, setField }) {
  return (
    <div>
      <div className="w-[35%] p-1 mb-3 border-b-[1px] border-richblack-500 flex justify-between items-center bg-richblack-800 rounded-full ">
        {tabData.map((tab) => (
          <div
            key={tab.id}
            onClick={() => setField(tab.type)}
            className={`${
              field === tab.type
                ? "bg-richblack-900 text-richblack-25"
                : "bg-transparent text-richblack-200"
            } rounded-full px-3 py-2 transition-all duration-200 cursor-pointer`}
          >
            {tab?.tabName}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToggleButton;
