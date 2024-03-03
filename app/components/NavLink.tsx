import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  const pathName = usePathname();
  return (
    <Link
      href={href}
      className={`block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white ${
        pathName === href ? "text-white font-bold" : ""
      }`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
