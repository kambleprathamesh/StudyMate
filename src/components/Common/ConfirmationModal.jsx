import React from "react";
import IconBtn from "./IconBtn";
const CommonModal = ({ modalData }) => {
  return (
    <div>
      <div className="text-white">
        <p>{modalData.text1}</p>
        <p>{modalData.text2}</p>
        <div>
          <IconBtn
            onClick={modalData?.btn1handler}
            text={modalData?.btn1Text}
          />
          <button onClick={modalData?.btn2handler}>
            {modalData?.btn2Text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommonModal;
