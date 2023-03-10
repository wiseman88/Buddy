import Link from "next/link";

const NavLink = (prop, key) => {
  return (
    <li key={key}>
      <Link
        className="block pl-3 border-l text-slate-400 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:border-blue-500 py-2 uppercase text-xs"
        href={`${prop.link.id}`}
      >
        {prop.link.title}
      </Link>
    </li>
  );
};

export default NavLink;
