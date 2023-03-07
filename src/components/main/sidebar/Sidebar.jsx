import { useEffect, useState } from "react";
import { sidebarLinks } from "@/src/constants";
import NavLink from "./NavLink";

const Sidebar = () => {
  const [height, setHeight] = useState();

  useEffect(() => {
    const headerHeight = document.querySelector("header").offsetHeight;

    setHeight(headerHeight);
  });
  return (
    <aside
      className="fixed bottom-0 w-[18rem] overflow-y-auto"
      style={{ top: height }}
    >
      <nav>
        <ul className="pt-4">
          <li>
            <h5 className="font-bold mb-2 dark:text-white">Components</h5>
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
