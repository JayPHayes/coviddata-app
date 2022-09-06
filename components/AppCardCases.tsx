import React from "react";
import {CovidCase}  from "../models/iCases";

function AppCardCases( 
  {covidCase, selected}:{covidCase: CovidCase, selected: Boolean} ,
  ) {
  return (
    <div
      className={` ${selected ? "bg-keySysBlue-100/20" : "" }
                flex items-center space-x-2 bg-white   
               hover:bg-keySysBlue-100/10 cursor-pointer
                px-2 py-2 mr-4
                border-keySysBlue-100/30
                border rounded-md shadow-md`}
    >
      <img
        className="h-16 w-16 rounded-full"
        src={covidCase.seals}
        alt=""
      />
      <div>
        <p className="font-semibold text-xl">{covidCase.states}</p>
        <p className="font-thin text-sm">
            <span> Total Cases: </span>
            <span className="font-semibold text-keySysBlue-100">{covidCase.total_cases.toLocaleString()}</span>
        </p>
        <p className="font-thin text-sm space-x-2">
            <span>
                Deaths:
            </span>
            <span className="font-semibold  text-red-500">
                {covidCase.deaths.toLocaleString()}
            </span>
        </p>
      </div>
    </div>
  );
}

export default AppCardCases;
