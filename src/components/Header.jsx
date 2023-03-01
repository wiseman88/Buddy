import { useState } from "react";

export const Header = () => {
  const [display, setDisplay] = useState(false);

  return (
    <header
      className={`fixed w-full bg-white ${
        !display ? "border-b border-gray-200" : ""
      }`}
    >
      <div className="flex items-center justify-between lg:w-9/12 mx-auto px-4 py-4">
        <a className="text-xl sm:text-lg" href="">
          CSS-Buddy
        </a>
        <nav>
          <ul className="hidden sm:flex gap-8 uppercase text-sm">
            <li>
              <a className="hover:text-blue-600" href="">
                about
              </a>
            </li>
            <li>
              <a className="hover:text-blue-600" href="">
                docs
              </a>
            </li>
            <li>
              <a className="hover:text-blue-600" href="">
                templates
              </a>
            </li>
          </ul>
        </nav>
        <button className="sm:hidden" onClick={() => setDisplay(!display)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </button>
      </div>
      {display && (
        <nav className="absolute block md:hidden w-full h-screen z-10 bg-white text-gray-400 px-4 capitalize">
          <ul>
            <li>
              <a className="block py-2 hover:text-blue-600" href="">
                about
              </a>
            </li>
            <li>
              <a className="block py-2 hover:text-blue-600" href="">
                docs
              </a>
            </li>
            <li>
              <a className="block py-2 hover:text-blue-600" href="">
                templates
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
