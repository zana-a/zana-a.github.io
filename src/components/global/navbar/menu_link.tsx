import Link from "next/link";
import { LinkMeta } from "./link";

const menuLinks: LinkMeta[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Portfolio",
    href: "/porfolio",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export function MenuLinks() {
  return (
    <div className="space-x-4">
      {menuLinks.map((link) => (
        <MenuLink {...link} />
      ))}
    </div>
  );
}

function MenuLink(link: LinkMeta) {
  return (
    <Link
      key={link.label}
      href={link.href}
      className="hover:text-lime-600 transition-all ease-in-out"
    >
      {`${link.label}.`}
    </Link>
  );
}
