import React from 'react'

function AppAbout({isMain}: {isMain: Boolean}) {
  return (
    <section>
      <div className="py-20 bg-gray-50 radius-for-skewed">
        <div className="container mx-auto px-4">
            {isMain && 
                <div className="mb-16 max-w-md text-center mx-auto">
                    <span className="text-keySysBlue-100 font-bold">
                    A Devlopers approach to the Burning Inferno - ASP.NET Web API C#
                    with ADO.NET{" "}
                    </span>
                    <h2 className="text-4xl lg:text-4xl font-bold font-heading">
                    API C# with ADO.NET
                    </h2>
                </div>
            }

          <div className="hidden lg:block  max-w-2xl xl:max-w-3xl mx-auto py-px rounded bg-keySysBlue-100  mb-4 "></div>

          <div className="relative flex flex-wrap -mx-4 z-0">
            {/* <div className="hidden lg:block absolute inset-x-0 max-w-2xl xl:max-w-3xl mx-auto py-px rounded bg-keySysBlue-100  " ></div> */}

            <div className="mb-8 w-full lg:w-1/3 px-4 text-center">
              <span className="relative mb-6 lg:mb-10 mx-auto flex w-16 h-16 items-center justify-center bg-keySysBlue-100 rounded-full text-white text-2xl">
                1
              </span>
              <h3 className="mb-4 text-2xl font-bold font-heading">
                ASP.Net 6.0 / C# with ADO.NET
              </h3>
              <p className="text-gray-500 text-left">
                ASP.NET Core is a free and open-source web framework and
                successor to ASP.NET, developed by Microsoft. It is a modular
                framework that runs on both the full .NET Framework, on Windows,
                and the cross-platform .NET. However ASP.NET Core version 3
                works only on .NET Core dropping support of the .NET Framework
              </p>
            </div>

            <div className="mb-8 w-full lg:w-1/3 px-4 text-center">
              <span className="mb-4 lg:mb-10 mx-auto flex w-16 h-16 items-center justify-center bg-keySysBlue-100 rounded-full text-white text-2xl">
                2
              </span>
              <h3 className="mb-4 text-2xl font-bold font-heading">
                Next.js / React.js / Tailwinds Front end{" "}
              </h3>
              <div className="text-gray-500 text-left">
                <p>
                  Next.js is an open-source web development framework created by
                  Vercel enabling React-based web applications with server-side
                  rendering and generating static websites
                </p>
                <p className="mt-2">
                  React is a free and open-source front-end JavaScript library
                  for building user interfaces based on UI components. It is
                  maintained by Meta and a community of individual developers
                  and companies.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/3 px-4 text-center">
              <span className="mb-4 lg:mb-10 mx-auto flex w-16 h-16 items-center justify-center bg-keySysBlue-100 rounded-full text-white text-2xl">
                3
              </span>
              <h3 className="mb-4 text-2xl font-bold font-heading">
                Sql Server Database
              </h3>
              <p className="text-gray-500 text-left">
                Microsoft SQL Server is a relational database management system
                developed by Microsoft. As a database server, it is a software
                product with the primary function of storing and retrieving data
                as requested by other software applications—which may run either
                on the same computer or on another computer across a network
              </p>
            </div>
          </div>
        </div>
      </div>
 
    </section>
  )
}

export default AppAbout