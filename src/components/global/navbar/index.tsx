import Container from "@/components/global/container";

import { MenuLinks } from "./menu_link";
import { SocialLinks } from "./social_link";
import { Logo } from "./logo";

export default function Navbar() {
  return (
    <div className="py-6">
      <Container>
        <div className="flex justify-between">
          <div className="div flex">
            <div className="mr-4">
              <Logo />
            </div>
            <MenuLinks />
          </div>
          <SocialLinks />
        </div>
      </Container>
    </div>
  );
}
