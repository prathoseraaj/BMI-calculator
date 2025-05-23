"use client";
import React, { useState } from "react";

const page = () => {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [insights, setInsights] = useState<string>("");

  const handleBMI = () => {
    console.log("Height:",height)
    console.log("Weight:",weight)

    const bmiresult: number = Math.round(weight*10000/(height*height))
    console.log(bmiresult)
    setResult(bmiresult)

    if(bmiresult < 18.5){
      setInsights("Under-weight")
    }
    else if(18.5 < bmiresult && bmiresult < 24.9){
      setInsights("Normal-weight")
    }
    else if(25.0 < bmiresult && bmiresult < 29.9){
      setInsights("Over-weight")
    }
    else if(30.0 < bmiresult && bmiresult < 34.9){
      setInsights("Obese")
    }
    else if(35 < bmiresult){
      setInsights("Extremely Obese")
    }
     

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
            <h1 className="font-bold text-[17px] ">Height(Cm)</h1>
            <input
              type="text"
              name="height"
              className="w-[50px] border rounded mt-2 ml-3 px-2"
              onChange={(e)=>setHeight(Number(e.target.value))}
            />
          </div>
          <div>
            <h1 className="font-bold text-[17px] ">Weight(Kg)</h1>
            <input
              type="text"
              name="weight"
              className="w-[50px] border rounded mt-2 px-2 ml-3"
              onChange={(e)=>setWeight(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="flex flex-col items-center mt-10 ">
          <button
            type="button"
            className="bg-black text-white w-[75px] mb-10 rounded-[5px] p-1 shadow-2xl hover:bg-white hover:text-black border-1"
            onClick={handleBMI}
          >
            wasup!?
          </button>
          <h1>Result: {result}</h1>
          <h1>Insights: {insights}</h1>
        </div>
      </div>
    </div>
  );
};

export default page;
