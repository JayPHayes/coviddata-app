import React from "react";
import {CovidCase}  from "../models/iCases";

function AppCardCases( {covidCase}:{covidCase: CovidCase} ) {
  return (
    <div
      className="flex items-center space-x-2 bg-white   
                            px-2 py-2 mr-4
                            border-keySysBlue-100/30
                            border rounded-md shadow-md"
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
