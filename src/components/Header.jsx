import useColorMode from "@/hooks/useColorMode";
import { useState } from "react";

export const Header = () => {
  const [display, setDisplay] = useState(false);
  const [colorMode, setColorMode] = useColorMode();

  const toggleColor = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };

  return (
    <header
      className={`fixed w-full bg-white dark:bg-slate-900 dark:text-slate-100 ${
        !display ? "border-b border-gray-200" : ""
      }`}
    >
      <div className="flex items-center justify-between lg:w-9/12 mx-auto px-4 py-4">
        <a className="text-xl sm:text-lg" href="">
          CSS-Buddy
        </a>
        <nav className="flex-none">
          <ul className="hidden sm:flex items-center gap-8 uppercase text-sm">
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
            <li className="flex items-center">
              <button onClick={toggleColor}>
                {colorMode === "light" ? (
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
                      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    />
                  </svg>
                ) : (
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
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                )}
              </button>
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