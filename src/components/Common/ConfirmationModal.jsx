// import React from "react";
// import IconBtn from "./IconBtn";
// const CommonModal = ({ modalData }) => {
//   return (
//     <div>
//       <div className="w-screen h-screen relative backdrop-blur-sm border-4 border-white text-white">
//         <div className="w-1/3 h-1/3  absolute top-1/3 left-1/3 flex flex-col justify-center items-center  gap-x-8 border-4 border-yellow-100">
//           <p>{modalData.text1}</p>
//           <p>{modalData.text2}</p>
//           <div className="flex justify-start gap-4">
//             <IconBtn
//               onClick={modalData?.btn1handler}
//               text={modalData?.btn1Text}
//             />
//             <button onClick={modalData?.btn2handler}>
//               {modalData?.btn2Text}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CommonModal;

import React from "react";
import IconBtn from "./IconBtn";

const CommonModal = ({ modalData }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-richblack-100 bg-opacity-10 ">
      <div className="w-1/4 h-1/4 flex flex-col justify-center items-center gap-y-4 p-6 bg-richblack-800 rounded-lg text-white">
        <p className="text-lg font-semibold">{modalData.text1}</p>
        <p className="text-sm">{modalData.text2}</p>
        <div className="flex justify-between gap-4">
          <IconBtn onClick={modalData?.btn1handler} text={modalData?.btn1Text} />
          <button
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            onClick={modalData?.btn2handler}
          >
            {modalData?.btn2Text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommonModal;
