import React, { useState } from "react";
import AppCardCases from "../components/AppCardCases";
import AppCardCasesRow from "../components/AppCardCasesRow";
import { CovidCase } from "../models/iCases";
import request from "../utils/requests";
import { FaBars, FaList } from "react-icons/fa";
import { BsCardText } from "react-icons/bs";

function Cases(data: CovidCase) {
  const [isTableList, setIsTableList] = useState(false)
  console.log("XXX data: ", data);
  return (
    <div>
      <h3 className="text-xl">Cases</h3>
      <div>
        <p>United States Total Cases by State</p>
        <div className="mb-2">
          {/* <label className="block text-sm font-medium mb-2" for="">
            Label for text
          </label> */}
          <div className="flex items-center space-x-4">
            <input
              className="block w-full px-4 py-3  text-sm placeholder-gray-500 bg-white border border-keySysBlue-100 rounded"
              type="text"
              name=""
              placeholder="Write a text"
            />
            {!isTableList && 
              <div className="text-5xl cursor-pointer  text-keySysBlue-100  "  onClick={() => setIsTableList(!isTableList)} >
                <BsCardText  />
              </div>
            }

            {isTableList && 
              <div className="text-4xl cursor-pointer text-gray-600 " onClick={() => setIsTableList(!isTableList)} >
                <FaList  />
              </div>
            }
          </div>

        </div>
      </div>

      <section className="flex space-x-4">
        {/* **Left Side: List ** */}
        <div className=" w-10/12 py-4">
          {isTableList && 
            <div className="grid grid-cols-3 gap-2">
              {/* *** Card ** */}
              {data.data.map((c: CovidCase) => (
                <AppCardCases covidCase={c} />
              ))}
            </div>
          }
          
          {/* *** Card Row ** */}
          {!isTableList && 
            <div>
              {data.data.map((c:CovidCase) => (
                <AppCardCasesRow key={c.id} covidCase={c} />
              ))}
            </div>
          }

          
        </div>

        {/* **Right Side: Details ** */}
        <div className="bg-keySysBlue-100/10 w-4/12 min-h-[48rem]">
          <h3>Details</h3>
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
