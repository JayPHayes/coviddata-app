import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import AppLogo from "../components/AppLogo";
import { FaBars, FaTimes } from "react-icons/fa";
import appMenu from "../config/appMenu";
import AppHeader from "../components/AppHeader";



const Home: NextPage = () => {
  const [isMenu, setIsMenu] = useState(false)
  
  return (
    <section className="skewed-bottom-right">
      {/* <AppHeader  /> */}


      <div className="bg-gray-50 pt-20 pb-20 radius-for-skewed ">
        <div className="container mx-auto px-4 ">
          <div className="flex flex-wrap -mx-4 ">
            <div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center ">
              <div className="w-full text-center lg:text-left ">
                <div className=" ">
                  <h2 className="mb-3 text-4xl lg:text-5xl font-bold font-heading">
                    <span className="text-keySysBlue-100">Keysys </span>
                    <span> C# </span>
                    <span className="text-keySysBlue-100">API </span>
                    <span>sample project</span>
                  </h2>
                </div>
                <div className="max-w-sm mx-auto lg:mx-0">
                  <p className="mb-6 text-gray-400 leading-loose">
                    WE DESIGN, DEVELOP, & INTEGRATE SOFTWARE. 
                    C# API.NEt core 6.0 sample project with ADO.NET and Microsoft.Data.SqlClient
                  </p>
                  {/* <div>
                    <a
                      className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200"
                      href="#"
                    >
                      Get Started
                    </a>
                    <a
                      className="inline-block w-full lg:w-auto py-2 px-6 leading-loose font-semibold bg-white hover:bg-gray-50 rounded-l-xl rounded-t-xl transition duration-200"
                      href="#"
                    >
                      How it works
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
              <img
                src="/Keysys02.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
        </svg>
      </div> */}


    </section>
  );
};

export default Home;
