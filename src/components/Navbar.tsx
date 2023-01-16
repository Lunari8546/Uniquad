import "@fontsource/material-icons-sharp";

export default function Navbar() {
  return (
    <header className="fixed w-full p-12 select-none z-50">
      <nav className="flex justify-between items-center">
        <div>
          <a className="mr-10" rel="prefetch" href="./personalitytest">
            personality test
          </a>
          <a rel="prefetch" href="./gallery">
            gallery
          </a>
        </div>
        <div>
          <a className="mr-10" href="#">visit shopline</a>
          <a rel="prefetch" href="./contact">
            contact
          </a>
        </div>
      </nav>
    </header>
  );
}
