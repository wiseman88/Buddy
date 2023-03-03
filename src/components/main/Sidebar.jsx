import { useEffect, useState } from "react";

const Sidebar = () => {
  const [height, setHeight] = useState();
  const navigation = [
    "breadcrumb",
    "buttons",
    "dropdown",
    "message",
    "navbar",
    "pagination",
    "tabs",
  ];

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
            <ul className="text-slate-400 dark:text-slate-200">
              {navigation.map((item, key) => (
                <li key={key}>
                  <a
                    href=""
                    className="block pl-3 hover:text-slate-700 border-l hover:border-blue-500 dark:text-slate-200 dark:hover:text-white py-2 uppercase text-xs"
                  >
                    {item}
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
