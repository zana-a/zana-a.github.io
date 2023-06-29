import Link from "next/link";
import { MenuLinks } from "./menu_link";
import { SocialLinks } from "./social_link";

export default function Navbar() {
  return (
    <div>
      <MenuLinks />
      <SocialLinks />
    </div>
  );
}
