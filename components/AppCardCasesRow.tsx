import React from "react";
import { CovidCase } from "../models/iCases";

function AppCardCasesRow( {covidCase}: {covidCase:CovidCase} ) {
  return (
    <div
      className="border border-keySysBlue-100/30 px-2 py-2 rounded-md 
                mb-2
                flex items-center space-x-2"
    >
      <img
        className="h-16 w-16 rounded-full"
        src={covidCase.seals}
        alt=""
      />

      <p className=" text-2xl w-[17rem]">{covidCase.states}</p>
      <div className="pl-2">
        <p className="text-xs font-extralight">Total Cases:</p>
        <p className="text-xl mb-2">1,496,295</p>
      </div>
      <div className="pl-2">
        <p className="text-xs font-extralight">Deaths:</p>
        <p className="text-xl mb-2">20,202</p>
      </div>
      <div className="pl-2">
        <p className="text-xs font-extralight">New Cases 1day:</p>
        <p className="text-xl mb-2">1,995</p>
      </div>
      <div className="pl-2">
        <p className="text-xs font-extralight">Cases Per 1M People:</p>
        <p className="text-xl mb-2">305,792</p>
      </div>
      <div className="pl-2">
        <p className="text-xs font-extralight">Status:</p>
        <p className="text-xl mb-2 text-[#FD3333]">New Cases Report</p>
      </div>
    </div>
  );
}

export default AppCardCasesRow;
