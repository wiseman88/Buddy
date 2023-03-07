import { navLinks } from "@/src/constants";
import Link from "next/link";

const NavLink = (prop) => {
  return (
    <>
      {navLinks.map((link, key) => (
        <li key={key}>
          <Link className={prop.style} href={`${link.id}`}>
            {link.title}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavLink;
