import "@fontsource/material-icons-sharp";

export default function Navbar() {
  return (
    <header className="fixed w-full p-14 select-none z-50">
      <nav className="flex justify-between items-center">
        <a>
          <h1 className="text-2xl font-bold">uniquad</h1>
        </a>
        <ul className="hidden lg:block">
          <li className="mr-5">
            <a>visit shopline</a>
          </li>
          <li className="ml-5">
            <a>personality test</a>
          </li>
        </ul>
        <div className="block lg:hidden pt-2">
          <span className="material-icons-sharp">menu</span>
        </div>
      </nav>
    </header>
  );
}
