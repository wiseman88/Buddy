import { navLinks } from "@/src/constants";
import { ChevronDownIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";

const MobileNav = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="absolute block md:hidden w-full h-screen z-10 bg-white dark:bg-slate-700 text-gray-500 dark:text-gray-300 px-4 capitalize">
      <ul>
        {navLinks.map((link, key) => (
          <li key={key}>
            <a className="block py-2 hover:text-blue-600" href="">
              {link.title}
            </a>
          </li>
        ))}
        <li className="flex items-center pt-2 border-t">
          <span className="mr-4">Switch Theme</span>
          <div className="relative flex items-center gap-3 border rounded p-2">
            <SunIcon className="w-6 h-6 dark:hidden" />
            <MoonIcon className="w-6 h-6 hidden dark:block" />
            {theme === "light" ? <span>Light</span> : <span>Dark</span>}
            <select
              className="w-full absolute inset-0 appearance-none opacity-0 text-lg dark:text-gray-900 rounded"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
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
