import { useEffect, useState } from "react";
import { sidebarLinks } from "@/src/constants";

const Sidebar = () => {
  const [height, setHeight] = useState();

  useEffect(() => {
    const headerHeight = document.querySelector("header").offsetHeight;

    setHeight(headerHeight);
  });
  return (
    <aside
      className="fixed pl-4 inset-0 z-0 left overflow-y-auto w-[18rem] left-[max(0px,calc(50%-45rem))]"
      style={{ top: height }}
    >
      <nav>
        <ul className="pt-4">
          <li>
            <h5 className="font-bold mb-2 dark:text-white">Components</h5>
            <ul>
              {sidebarLinks.map((link, key) => (
                <li key={key}>
                  <a
                    href=""
                    className="block pl-3 border-l text-slate-400 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:border-blue-500 py-2 uppercase text-xs"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
