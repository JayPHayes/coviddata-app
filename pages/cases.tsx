import React, { useState } from "react";
import AppCardCases from "../components/AppCardCases";
import AppCardCasesRow from "../components/AppCardCasesRow";
import { CovidCase } from "../models/iCases";
import request from "../utils/requests";
import { FaBars, FaList } from "react-icons/fa";
import { BsCardText } from "react-icons/bs";
import Image from "next/image";
import AppStateDetail from "../components/AppStateDetail";

function Cases(data: CovidCase) {
  const [isTableList, setIsTableList] = useState(true)
  const [isDetails, setIsDetails] = useState(false)
  const [search, setSearch] = useState("")
  const [selectedState, setSelectedState] = useState<CovidCase>(data.data[0])
  // console.log('XXXX isDetails: ', isDetails)

  const handleSearch = (rows:CovidCase[]) => {
    return rows.filter((row) => 
      row.states.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      row.isNewCasesSearch.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      
      );
  }

  const handleDetails = (c: CovidCase) => {
    setIsDetails(true)
    setSelectedState(c)

  }

  const handleTableList = () => {
    setIsTableList(!isTableList)
    setIsDetails(false)
  }

  // console.log("XXX data: ", data);
  return (
    <div>
      {/* *** Header *** */}
      <div className="flex space-x-6 mb-2">
        <h3 className="text-xl">Cases</h3>
        <div className="flex items-center space-x-2">
          <p className="text-gray-700 font-semibold mr-6">
            Filtered States:
            <span className="text-keySysBlue-100">
              {" "}
              {handleSearch(data.data).length}
            </span>
          </p>
          <p className="text-gray-700 font-semibold mr-6">
            Total States:
            <span className="text-keySysBlue-100"> {data.data.length}</span>
          </p>
        </div>
      </div>

      <div>
        <p>United States Total Cases by State</p>
        <div className="mb-2">
          <div className="flex items-center space-x-4">
            <input
              className="block w-full px-4 py-3  text-sm placeholder-gray-500 bg-white border border-keySysBlue-100 rounded"
              type="text"
              name=""
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Enter Search Data... (NewCase:N)"
            />
            {!isTableList && (
              <div
                className="text-5xl cursor-pointer  text-keySysBlue-100  "
                onClick={() => handleTableList()}
              >
                <BsCardText />
              </div>
            )}

            {isTableList && (
              <div
                className="text-4xl cursor-pointer text-gray-600 "
                onClick={() => handleTableList()}
              >
                <FaList />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* *** Body *** */}
      <section className="flex space-x-4">
        {/* **Left Side: List ** */}
        <div className="hidden md:block w-full lg:w-10/12 py-4">
          {isTableList && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-2 overflow-y-scroll   scroll-smooth ">
              {/* *** Card ** */}
              {handleSearch(data.data).map((c: CovidCase) => (
                <div key={c.caseId} onClick={() =>setSelectedState(c)} className="">
                  <AppCardCases covidCase={c} selected={c.caseId === selectedState.caseId} />
                </div>
              ))}
            </div>
          )}

          {/* *** Card Row ** */}
          {!isTableList  && (
            <div className="overflow-y-scroll  h-[40rem] scroll-smooth ">
              {handleSearch(data.data).map((c: CovidCase) => (
                <div key={c.caseId} onClick={() => setSelectedState(c)} >
                  <AppCardCasesRow covidCase={c} selected={c.caseId === selectedState.caseId}  />
                </div>
              ))}
            </div>
          )}
        </div>
        {!isDetails && 
          <div className=" md:hidden w-full lg:w-10/12 py-4">
            {isTableList && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-2 overflow-y-scroll   scroll-smooth ">
                {/* *** Card ** */}
                {handleSearch(data.data).map((c: CovidCase) => (
                  <div key={c.caseId} onClick={() => handleDetails(c)} className="">
                    <AppCardCases covidCase={c} selected={c.caseId === selectedState.caseId} />
                  </div>
                ))}
              </div>
            )}

            {/* *** Card Row ** */}
            {!isTableList  && (
              <div className="overflow-y-scroll  h-[40rem] scroll-smooth ">
                {handleSearch(data.data).map((c: CovidCase) => (
                  <div key={c.caseId} onClick={() => handleDetails(c)} >
                    <AppCardCasesRow covidCase={c} selected={c.caseId === selectedState.caseId}  />
                  </div>
                ))}
              </div>
            )}
          </div>
        }

        {/* **Right Side: Details ** */}
        <div>
          <div className="hidden md:block ">
            <AppStateDetail selectedState={selectedState} setIsDetails={setIsDetails} showDone={false} />
          </div>

          {isDetails && 
            <div className="md:w-full ">
              <AppStateDetail selectedState={selectedState} setIsDetails={setIsDetails} showDone={true}  />
            </div>
          }
        </div>
        
      </section>
    </div>
  );
}

export default Cases;

export async function getStaticProps() {
  const res = await fetch(request.fetchCases);
  const data = await res.json();

  return {
    props: {
      data: data,
    },
    revalidate: 10,
  };
}
