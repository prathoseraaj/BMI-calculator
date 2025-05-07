import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="flex flex-column h-[40vh] w-[600px] bg-white rounded-[10px] p-[10px]">
        <div className="flex flex-col items-center w-full">
          <h1 className="font-bold text-[25px]  ">
            BMI Calculator
          </h1>
          <p className="text-gray-400 text-[20px]">Check your Body mass Index</p>
        </div>
      </div>
    </div>
  );
};

export default page;
