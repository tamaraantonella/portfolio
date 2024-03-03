import React from "react";
import NavLink from "./NavLink";

interface MenuOverlayProps {
  links: { url: string; title: string }[];
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.url} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
