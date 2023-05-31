import Link from "next/link";
import Container from "@/components/container";

const navItems: {
  to: string;
  label: string;
}[] = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
];

export default function Navbar() {
  return (
    <div className="bg-white">
      <Container>
        <div className="h-14">
          <div className="flex justify-between items-center h-full">
            <div className="flex">
              <Logo />
              <span className="mx-3" />
              <NavLinks />
            </div>
            <div>socials</div>
          </div>
        </div>
      </Container>
    </div>
  );
}

function Logo() {
  const className = `
    font-bold
    uppercase
    text-2xl
    hover:text-blue-700
    transition-all
    ease-in
  `;

  return (
    <Link href="/" className={className}>
      ZA
    </Link>
  );
}

function NavLinks() {
  return (
    <ul className="flex items-center space-x-4 text-sm uppercase">
      {navItems.map((item) => (
        <li key={item.label}>
          <Link className="hover:text-blue-700" href={item.to}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
