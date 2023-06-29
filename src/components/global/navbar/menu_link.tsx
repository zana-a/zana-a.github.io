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

function MenuLink(link: LinkMeta) {
  return (
    <Link key={link.label} href={link.href}>
      {link.label}
    </Link>
  );
}

export function MenuLinks() {
  return menuLinks.map((link) => <MenuLink {...link} />);
}
