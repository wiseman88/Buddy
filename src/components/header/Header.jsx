import useColorMode from "@/hooks/useColorMode";
import { useState, useEffect } from "react";
import {
  Bars3BottomRightIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

export const Header = () => {
  const [display, setDisplay] = useState(false);
  const [colorMode, setColorMode] = useColorMode();
  const [mounted, setMounted] = useState(false);

  const toggleColor = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

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
                  <MoonIcon className="h-6 w-6" />
                ) : (
                  <SunIcon className="h-6 w-6" />
                )}
              </button>
            </li>
          </ul>
        </nav>
        <button className="sm:hidden" onClick={() => setDisplay(!display)}>
          <Bars3BottomRightIcon className="h-6 w-6" />
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
