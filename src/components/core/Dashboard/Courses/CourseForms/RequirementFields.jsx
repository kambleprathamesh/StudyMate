// import React, { useEffect, useState } from "react";
// // import IconBtn from "../../../../Common/IconBtn";

// export const RequirementField = ({
//   name,
//   label,
//   register,
//   errors,
//   setValue,
//   getValues,
// }) => {
//   const [requirement, setRequiremnt] = useState("");
//   const [requirementList, setRequirementList] = useState([]);
//   const addRequirement = () => {
//     if (requirement) {
//       setRequirementList([...requirementList, requirement]);
//       setRequiremnt("");
//     }
//   };
//   const removeRequirement = (index) => {
//     const updatedRequirementList = [...requirementList];
//     updatedRequirementList.splice(index, 1);
//     setRequirementList(updatedRequirementList);
//   };
//   useEffect(() => {
//     register(name, { required: true });
//   }, []);
//   useEffect(() => {
//     setValue(name, requirementList);
//   }, [requirementList]);
//   return (
//     <div>
//       <div>
//         <label htmlFor={name}>{label}</label>
//         <input
//           type="text"
//           id={name}
//           value={requirement}
//           onChange={() => setRequiremnt((e) => e.target.value)}
//         />
//       </div>

//       <button className="text-yellow-25" onClick={addRequirement}>
//         Add
//       </button>

//       {requirementList.length > 0 && (
//         <ul>
//           {requirementList.map((item, index) => (
//             <li key={index}>
//               {item}
//               <button
//                 className="text-white"
//                 onClick={() => removeRequirement(index)}
//               >
//                 Clear
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

import React, { useEffect, useState } from "react";

const RequirementFields = ({
  name,
  label,
  register,
  errors,
  setValue,
  getValues,
}) => {
  const [requirement, setRequirement] = useState("");
  const [requirementList, setRequirementList] = useState([]);

  useEffect(() => {
    register(name, { required: true });
  }, [register, name]);

  useEffect(() => {
    setValue(name, requirementList);
  }, [requirementList, setValue, name]);

  const addRequirement = (e) => {
    e.preventDefault();
    if (requirement) {
      setRequirementList((prevList) => [...prevList, requirement]);
      setRequirement("");
    }
  };

  const removeRequirement = (e, index) => {
    setRequirementList((prevList) => {
      const updatedList = [...prevList];
      updatedList.splice(index, 1);
      return updatedList;
    });
  };

  return (
    <div className="flex flex-col items-start">
      <div className="flex flex-col ">
        <label htmlFor={name} className="text-richblack-5">
          {label} <sup className="text-pink-300">*</sup>
        </label>
        <input
          type="text"
          id={name}
          value={requirement}
          className="w-full p-2 bg-richblack-700 rounded-md placeholder:text-richblack-200 border-b-[1px] border-richblack-400 mt-2"
          onChange={(e) => setRequirement(e.target.value)}
        />
      </div>
      <button className="text-yellow-25" onClick={addRequirement}>
        Add
      </button>
      {requirementList.length > 0 && (
        <ul>
          {requirementList.map((item, index) => (
            <li key={index}>
              {item}
              <button
                className="text-white ml-4"
                onClick={() => removeRequirement(index)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RequirementFields;
