import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { CovidCase } from "../models/iCases";
import AppCasesStatus from "./AppCasesStatus";

function AppStateDetail({selectedState}: {selectedState: CovidCase}) {
  return (
    <div className="hidden lg:block   bg-keySysBlue-100/20 w-4/12 min-h-[30rem]">
      {/* <h3>Details</h3> */}
      
      {/* Images Header - Flag */}
      <div className=" relative h-48 flex justify-center  bg-blend-multiply ">
        <Image
          className="object-cover "
          width={450}
          height={200}
          src={selectedState.flags}
        />
        <div className="absolute inset-0 bg-whiteX opacity-50 rounded-t-xl"></div>
      </div>

      <div className="px-4 py-4 space-y-4">
        {/* seal & Name */}
        <div className="flex items-center space-x-2 ">
          <img
            className="h-20 w-20 rounded-full"
            src={selectedState.seals}
            alt=""
          />

          <p className="text-5xl">{selectedState.states}</p>
        </div>
        {/* Cases */}
        <div className="text-2xl flex items-center justify-between mt-2 px-2">
          <div>Total Cases:</div>
          <div className="font-thin text-keySysBlue-100">
            {selectedState.total_cases.toLocaleString()}
          </div>
        </div>
        {/* Deaths */}
        <div className="text-2xl flex items-center justify-between mt-2 px-2">
          <div>Deaths:</div>
          <div className="font-thin text-red-500">
            {selectedState.deaths.toLocaleString()}
          </div>
        </div>
        
        {/* new_cases_1_day */}
        <div className="text-2xl flex items-center justify-between mt-2 px-2">
          <div>New Case 1Day:</div>
          <div className="font-thin text-gray-600">
            {selectedState.new_cases_1_day.toLocaleString()}
          </div>
        </div>

        {/* cases_per_1M_people */}
        <div className="text-2xl flex items-center justify-between mt-2 px-2">
          <div>Cases per 1M:</div>
          <div className="font-thin text-gray-600">
            {selectedState.cases_per_1M_people.toLocaleString()}
          </div>
        </div>

        {/* newCaseStatus */}
        <div className="text-2xl flex items-center justify-between mt-2 px-2">
          <div>Status:</div>
          <AppCasesStatus selectedState={selectedState}  />
          {/* {selectedState.isNewCases && 
            <div className="flex items-center  space-x-3 text-green-700 
                            text-sm border shadow-md
                            border-green-500 px-2 py-1 rounded-md bg-green-100">
                <FaCheck  />
                <span>No New Cases</span>
            </div>
          }

          {!selectedState.isNewCases && 
            <div className="flex items-center  space-x-3 text-red-700
                            text-sm border shadow-md
                            border-red-500 px-2 py-1 rounded-md bg-red-100">
                <FaCheck  />
                <span>New Cases</span>
            </div>
          } */}
        </div>



      </div>
    </div>
  );
}

export default AppStateDetail;
