"use client";
import React, { useState } from "react";

const page = () => {
  const [height, setHeight] = useState<string>("");
  const [weight, seteight] = useState<string>("");

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="flex flex-col h-[50vh] w-[600px] bg-white rounded-[10px] p-[10px] shadow-lg">
        <div className="flex flex-col items-center w-full">
          <h1 className="font-bold text-[25px] mt-5  ">BMI Calculator</h1>
          <p className="text-gray-400 text-[20px]">
            Check your Body mass Index
          </p>
        </div>
        <div className="flex flex-row justify-center gap-30 mt-5">
          <div>
            <h1 className="font-bold text-[17px]  ">Height</h1>
            <input
              type="number"
              name="height"
              className="w-[50px] border rounded mt-2"
            />
          </div>
          <div>
            <h1 className="font-bold text-[17px] ">Weight</h1>
            <input
              type="number"
              name="weight"
              className="w-[50px] border rounded mt-2"
            />
          </div>
        </div>
        <div className="flex flex-col items-center mt-10 ">
          <button
            type="button"
            className="bg-black text-white w-[75px] mb-10 rounded-[5px] p-1 "
          >
            wasup!?
          </button>
          <h1>Result: {12}</h1>
          <h1>Insights: {"Under-Weight"}</h1>
        </div>
      </div>
    </div>
  );
};

export default page;
