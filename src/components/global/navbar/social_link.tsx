import { LinkMeta } from "./link";

const socialLinks: LinkMeta[] = [
  {
    label: "Github",
    href: "https://github.com/zana-a",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/zana-ahmad",
  },
];

function SocialLink(link: LinkMeta) {
  return (
    <a
      key={link.label}
      href={link.href}
      className="hover:underline underline-offset-4"
    >
      {link.label}
    </a>
  );
}

export function SocialLinks() {
  return (
    <div className="space-x-4">
      {socialLinks.map((link) => (
        <SocialLink {...link} />
      ))}
    </div>
  );
}
