import { useEffect, useState } from "react";

import "@fontsource/material-icons-sharp";

export default function Navbar() {
  const [isRoot, setIsRoot] = useState(false);

  useEffect(() => {
    setIsRoot(location.pathname == "/");
  });

  return (
    <header className="fixed bg-white/90 w-full p-14 select-none z-50">
      <nav className="hidden lg:flex justify-between items-center">
        <div>
          <a className="mr-10" rel="prefetch" href="./personalitytest">
            personality test
          </a>
          <a rel="prefetch" href="./gallery">
            gallery
          </a>
        </div>
        {!isRoot && (
          <a
            rel="prefetch"
            href="./"
            className="normal-case text-2xl md:text-3xl lg:text-4xl font-bold"
          >
            uniquad
          </a>
        )}
        <div>
          <a className="mr-10" href="#">
            visit shopline
          </a>
          <a rel="prefetch" href="./contact">
            contact
          </a>
        </div>
      </nav>
    </header>
  );
}
