import useColorMode from "@/hooks/useColorMode";
import { ChevronDownIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const MobileNav = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <nav className="absolute block md:hidden w-full h-screen z-10 bg-white dark:bg-slate-700 text-gray-500 dark:text-gray-300 px-4 capitalize">
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
        <li className="flex items-center pt-2 border-t">
          <span>Switch Theme</span>
          <span className="px-2">|</span>
          <div className="relative flex items-center gap-3 border rounded p-2">
            <SunIcon className="w-6 h-6 dark:hidden" />
            <MoonIcon className="w-6 h-6 hidden dark:block" />
            {colorMode === "light" ? <span>Light</span> : <span>Dark</span>}
            <select
              className="w-full absolute inset-0 appearance-none opacity-0 text-lg rounded"
              value={colorMode}
              onChange={(e) => setColorMode(e.target.value)}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
            <ChevronDownIcon className="w-3 h-3" />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
