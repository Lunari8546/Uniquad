import { useEffect, useState } from "react";

import "@fontsource/material-icons-outlined";

export default function Navbar() {
  const [isRoot, setIsRoot] = useState(false);

  useEffect(() => {
    setIsRoot(location.pathname == "/");
  });

  return (
    <header className="fixed bg-white/90 w-full p-14 select-none z-50">
      <nav className="flex justify-between items-center">
        <span></span>
        {!isRoot && (
          <a
            rel="prefetch"
            href="./"
            className="normal-case text-2xl md:text-3xl lg:text-4xl font-bold"
          >
            uniquad
          </a>
        )}
        {!isRoot && <span></span>}
        {isRoot && (
          <a href="/preorder" rel="prefetch" className="flex ml-10">
            <p>0</p>
            <span className="material-icons-outlined pl-1">shopping_cart</span>
          </a>
        )}
      </nav>
    </header>
  );
}
