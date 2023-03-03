import { useState } from "react";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

export const Header = () => {
  const [display, setDisplay] = useState(false);

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
        <DesktopNav />
        <button className="sm:hidden" onClick={() => setDisplay(!display)}>
          <Bars3BottomRightIcon className="h-6 w-6" />
        </button>
      </div>
      {display && <MobileNav />}
    </header>
  );
};
