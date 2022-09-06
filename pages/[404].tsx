import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <section>

      <div className="py-20 bg-gray-50 radius-for-skewed">
        <div className="container mx-auto px-4">
          <img
            className="mx-auto h-80 w-80"
            src="keysysy-not-found.svg"
            alt=""
          />
          <div className="text-center">
            <span className="mb-6 text-4xl text-blue-600 font-bold">
              Whoops!
            </span>
            <h3 className="mb-2 text-4xl font-bold">Something went wrong!</h3>
            <p className="mb-8 text-gray-400">
              Sorry, but we are unable to open this page
            </p>
            <div>
              <Link href="/" >
                <a className="w-full lg:w-auto mb-2 lg:mb-0 lg:mr-4 inline-block py-2 px-6 rounded-l-xl rounded-t-xl font-bold leading-loose text-gray-50 bg-keySysBlue-100 hover:bg-blue-700">
                  Go back to Homepage
                </a>
              </Link>
             
            </div>
          </div>
        </div>
      </div>
   
    </section>
  );
}

export default NotFound;
