import useColorMode from "@/hooks/useColorMode";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const DesktopNav = () => {
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
  );
};

export default DesktopNav;
