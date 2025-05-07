"use client";
import React, { useState } from "react";

const page = () => {
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");

  const handleBMI = () => {
    console.log("Height:",height)
    console.log("Weight:",weight)
  }

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
              onChange={(e)=>setHeight(e.target.value)}
            />
          </div>
          <div>
            <h1 className="font-bold text-[17px] ">Weight</h1>
            <input
              type="number"
              name="weight"
              className="w-[50px] border rounded mt-2"
              onChange={(e)=>setWeight(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col items-center mt-10 ">
          <button
            type="button"
            className="bg-black text-white w-[75px] mb-10 rounded-[5px] p-1 "
            onClick={handleBMI}
          >
            wasup!?
          </button>
          <h1>Result: {48}</h1>
          <h1>Insights: {"Under-Weight"}</h1>
        </div>
      </div>
    </div>
  );
};

export default page;
