import { useEffect, useState } from "react";
import { sidebarLinks } from "@/src/constants";
import NavLink from "./NavLink";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const [height, setHeight] = useState();
  const sidebar = useSelector((state) => state.sidebar.display);

  useEffect(() => {
    const headerHeight = document.querySelector("header").offsetHeight;

    setHeight(headerHeight);
  });
  return (
    <aside
      className={`${
        sidebar ? "hidden" : ""
      } md:block fixed bottom-0 w-full md:w-[12rem] overflow-y-auto bg-white dark:bg-black text-slate-200`}
      style={{ top: height }}
    >
      <nav>
        <ul className="pt-4">
          <li>
            <h5 className="font-bold mb-2 text-slate-900 dark:text-white">
              Components
            </h5>
            <ul>
              {sidebarLinks.map((link, key) => (
                <NavLink link={link} key={key} />
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
