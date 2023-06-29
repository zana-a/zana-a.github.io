import { LinkMeta } from "./link";

const socialLinks: LinkMeta[] = [
  {
    label: "Github",
    href: "https://github.com/zana-a",
  },
];

function SocialLink(link: LinkMeta) {
  return (
    <a key={link.label} href={link.href}>
      {link.label}
    </a>
  );
}

export function SocialLinks() {
  return socialLinks.map((link) => <SocialLink {...link} />);
}
