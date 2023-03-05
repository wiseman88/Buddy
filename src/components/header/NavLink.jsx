import { navLinks } from "@/src/constants";

const NavLink = (prop) => {
  return (
    <>
      {navLinks.map((link, key) => (
        <li key={key}>
          <a className={prop.style} href="">
            {link.title}
          </a>
        </li>
      ))}
    </>
  );
};

export default NavLink;
