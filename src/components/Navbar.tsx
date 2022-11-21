import "@fontsource/material-icons-sharp";

export default function Navbar() {
  return (
    <header className="fixed w-full p-10 select-none z-50">
      <nav className="flex justify-between items-center">
        <a href="./">
          <h1 className="text-2xl font-bold">uniquad</h1>
        </a>
        <ul className="hidden lg:block">
          <li className="mr-5">
            <a rel="prefetch" href="./products">our products</a>
          </li>
          <li className="ml-5">
            <a rel="prefetch" href="./quiz">personality quiz</a>
          </li>
        </ul>
        <div className="block lg:hidden pt-2">
          <span className="material-icons-sharp">menu</span>
        </div>
      </nav>
    </header>
  );
}
