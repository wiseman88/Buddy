import { useState } from "react";
import {
  Bars3BottomRightIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/solid";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toggleVisibility } from "@/store/sidebarSlice";

export const Header = () => {
  const [display, setDisplay] = useState(false);
  const dispatch = useDispatch();

  return (
    <header
      className={`fixed z-20 w-full bg-white dark:bg-slate-900 dark:text-slate-100 ${
        !display ? "border-b border-gray-200" : ""
      }`}
    >
      <div className="flex items-center justify-between lg:w-9/12 mx-auto px-4 py-4">
        <Link className="text-xl md:text-lg" href="/">
          CSS-Buddy
        </Link>
        <DesktopNav />
        <button className="md:hidden" onClick={() => setDisplay(!display)}>
          <Bars3BottomRightIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="px-4 py-2">
        <button
          className="md:hidden"
          onClick={() => dispatch(toggleVisibility())}
        >
          <EllipsisVerticalIcon className="h-6 w-6" />
        </button>
      </div>
      {display && <MobileNav />}
    </header>
  );
};
