import Head from 'next/head';
import React from 'react'
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';

function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className='bg-gray-50 min-h-screen px-4'>
      <div className='container mx-auto  '>
        <Head>
          <title>Kesysy - API Example</title>
          <link rel="icon" href="Keysys02.jpg" />
        </Head>

        {/* *** Header *** */}
        <AppHeader  />

        {/* *** Body *** */}
        <div>
          {children}
        </div>
        
        {/* *** Footer *** */}
        <AppFooter />

      </div>

    </div>
  );
}

export default Layout