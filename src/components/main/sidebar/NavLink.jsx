const NavLink = (props) => {
  return (
    <li key={props.key}>
      <a
        href=""
        className="block pl-3 border-l text-slate-400 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:border-blue-500 py-2 uppercase text-xs"
      >
        {props.link.title}
      </a>
    </li>
  );
};

export default NavLink;
