import React from "react";

const loading = () => {
  return (
    <div>
      <div className="w-full h-[50%] absolute flex items-center justify-center">
        <div className="w-16 h-16 border-t-4 border-[#3AEAC1] border-solid rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default loading;
