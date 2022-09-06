import React from "react";
import { CovidCase } from "../models/iCases";
import AppCasesStatus from "./AppCasesStatus";

function AppCardCasesRow( {covidCase, selected}: {covidCase:CovidCase, selected:Boolean} ) {
  return (
    <div
      className={` ${selected ? "bg-keySysBlue-100/20" : ""}
                border border-keySysBlue-100/30 px-2 py-2 rounded-md 
                hover:bg-keySysBlue-100/10 cursor-pointer
                mb-2 flex items-center space-x-2`}
    >
      <img
        className="h-16 w-16 rounded-full"
        src={covidCase.seals}
        alt=""
      />

      <p className="text-lg lg:text-2xl lg:w-[17rem]">{covidCase.states}</p>
      <div className="pl-2">
        <p className="text-xs font-extralight w-20">Total Cases:</p>
        <p className="lg:text-xl mb-2">{covidCase.total_cases.toLocaleString()}</p>
      </div>
      <div className="pl-2">
        <p className="text-xs font-extralight w-20">Deaths:</p>
        <p className="lg:text-xl mb-2">{covidCase.deaths.toLocaleString()}</p>
      </div>
      <div className="pl-2 hidden xl:block w-32">
        <p className="text-xs font-extralight">New Cases 1day:</p>
        <p className="lg:text-xl mb-2">{covidCase.new_cases_1_day.toLocaleString()}</p>
      </div>
      <div className="pl-2 hidden xl:block w-36">
        <p className="text-xs font-extralight">Cases Per 1M People:</p>
        <p className="lg:text-xl mb-2">{covidCase.cases_per_1M_people.toLocaleString()}</p>
      </div>
      <div className="pl-2 hidden xl:block">
        <p className="text-xs font-extralight">Status:</p>
        <AppCasesStatus selectedState={covidCase} />
        {/* <p className={`lg:text-base mb-2 text-[${covidCase.newCaseStatusColor}]`}>{covidCase.newCaseStatus}</p> */}
        {/* <p className={`lg:text-base mb-2 text-[${covidCase.newCaseStatusColor}]`}>{covidCase.newCaseStatus}</p> */}
      </div>
    </div>
  );
}

export default AppCardCasesRow;
