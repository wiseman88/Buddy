import { useEffect, useState } from "react";
import {
  Bars3,
  Bars3Icon,
  ChevronRightIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/solid";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toggleVisibility } from "@/store/sidebarSlice";

export const Header = () => {
  const [display, setDisplay] = useState(false);
  const [title, setTitle] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setTitle(document.title);
  });

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
        <button
          className="md:hidden text-slate-400"
          onClick={() => setDisplay(!display)}
        >
          <EllipsisVerticalIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="flex md:hidden items-center mx-4 py-4 border-t">
        <button
          className="md:hidden mr-2"
          onClick={() => dispatch(toggleVisibility())}
        >
          <Bars3Icon className="h-6 w-6 text-slate-400" />
        </button>
        <div className="flex items-center gap-1 text-sm text-slate-400">
          {/* <span>Getting started</span>
          <span>
            <ChevronRightIcon className="h-4 w-4" />
          </span> */}
          <span className="text-black font-semibold">{title}</span>
        </div>
      </div>
      {display && <MobileNav />}
    </header>
  );
};
