import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import NavLink from "./NavLink";

const DesktopNav = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleColor = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="flex-none">
      <ul className="hidden sm:flex items-center gap-8 uppercase text-sm">
        <NavLink style={"hover:text-blue-600"} />
        <li className="flex items-center">
          <button onClick={toggleColor}>
            {theme === "light" ? (
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
