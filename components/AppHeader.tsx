import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { FaBars, FaLinkedin, FaTimes } from "react-icons/fa";
import appMenu from "../config/appMenu";
import AppLogo from "./AppLogo";
import path from "path";

function AppHeader() {
  const [isMenu, setIsMenu] = useState(false);

  const router = useRouter()
  var pathname = router.pathname.replace('/', '')

  console.log('XXX pathname:', pathname)

  return (
    <>
      <nav className="relative px-0 py-6 flex justify-between items-center bg-gray-50">
        <AppLogo />
        <div className="lg:hidden">
          <div onClick={() => setIsMenu(true)}>
            <FaBars className="text-gray-600 text-xl cursor-pointer" />
          </div>
        </div>

        <ul
          className="hidden absolute 
                      top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 
                       lg:flex lg:mx-auto  lg:items-center 
                       lg:w-auto lg:space-x-6"
        >
          {appMenu.map((m) => (
            <li key={m.id} >
              <Link href={m.nav} >
                <span className={`${m.nav.replace('/', '') === pathname ? "text-keySysBlue-100 border-b-2 border-blue-600  " : ""} cursor-pointer text-sm  hover:text-gray-500` }>
                  {m.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <a target="parent"
          className="hidden lg:inline-block py-2 px-6 bg-white hover:bg-gray-50 text-sm text-blue-600 font-bold rounded-l-xl rounded-t-xl transition duration-200"
          href="https://www.linkedin.com/in/jayphayes/"
        >
          <div className="flex items-center space-x-2">
            <FaLinkedin  />
            <span>Jay P. Hayes</span>

          </div>
        </a>
      </nav>

      <div
        className={`${
          isMenu ? "" : "hidden"
        }  navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50`}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25 "></div>
        <nav className="relative flex flex-col py-6 px-6 h-full w-full bg-white border-r overflow-y-auto ">
          <div className="flex items-center mb-8">
            <div className="mr-auto text-3xl font-light leading-none" >
              <AppLogo />
            </div>
            <div onClick={() => setIsMenu(false)}>
              <FaTimes className="text-xl font-thin text-gray-500 cursor-pointer" />
            </div>
          </div>
          <div>
            <ul>
              {appMenu.map((m) => (
                <li key={m.id} className="mb-1" onClick={() => setIsMenu(false)}>
                  <Link href={m.nav}>
                    <span className={`${m.nav.replace('/', '') === pathname ? "bg-keySysBlue-100 text-gray-50 border-b" : " "}  cursor-pointer block p-4 text-sm font-semibold  hover:bg-blue-50 hover:text-blue-600 rounded`}>
                      {m.name} 
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-auto">
            {/* <div className="pt-6">
              <a
                className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold  bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl"
                href="#"
              >
                Sign In
              </a>
              <a
                className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-l-xl rounded-t-xl"
                href="#"
              >
                Sign Up
              </a>
            </div> */}
            <p className="my-4 text-xs text-center text-gray-400">
              <span>© 2022 Jay P. Hayes Sample for KeySys.</span>
            </p>
            <div className="text-center">

              <a className="inline-block px-1" target="parent" href="https://www.linkedin.com/in/jayphayes/">
                <div className="flex items-center space-x-2 text-keySysBlue-100">
                  <FaLinkedin  />
                  <span>Jay P. Hayes</span>

                </div>
              </a>
              
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default AppHeader;
