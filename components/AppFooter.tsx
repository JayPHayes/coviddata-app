import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import appMenu, {appVersion} from "../config/appMenu";

function AppFooter() {
  return (
    <section className="bg-red-100">
      <div className="py-1 bg-gray-50 radius-for-skewed">
        <div className="container mx-auto px-4">
          <div className="pb-12 flex flex-wrap items-center justify-between border-b border-gray-100">
            <div className="w-full lg:w-1/5 mb-12 lg:mb-4">
              <a
                className="inline-block text-3xl font-bold leading-none"
                href="#"
              >
                <img className="h-16" src="/Keysys02.jpg" alt="" width="auto" />
              </a>
            </div>
            <div className="w-full lg:w-auto">
              <ul className="flex flex-wrap lg:space-x-5 items-center">
                {appMenu.map((m) => (
                  <li key={m.id} className="w-full md:w-auto mb-2 md:mb-0">
                    <Link href={m.nav}>
                      <a className="lg:text-sm text-gray-400 hover:text-gray-500">
                        {m.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 mb-4 flex flex-wrap justify-between items-center">
            <p className="order-last text-sm text-gray-400">
              {appVersion}
            </p>
            <div className="mb-4 lg:mb-0 order-first lg:order-last ">
              <a href="" target="parent">
                <div className="flex items-center space-x-2 text-keySysBlue-100">
                  <FaLinkedin />
                  <p>Jay P. Hayes</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppFooter;
