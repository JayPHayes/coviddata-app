import Link from "next/link";
import React from "react";

function AppLogo() {
  return (
    <div>
      <Link href="/">
        <div className="flex items-center space-x-2 cursor-pointer">
          <img className="h-10" src="/Keysys02.jpg" alt="" width="auto" />

          <div className="text-3xl font-thin">API Demo</div>
        </div>
      </Link>
    </div>
  );
}

export default AppLogo;
