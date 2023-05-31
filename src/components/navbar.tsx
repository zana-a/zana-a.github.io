import Link from "next/link";

const navItems = [
  { to: "/", label: "" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
];

export default function Navbar() {
  return (
    <div className="bg-white border-b border-slate-200">
      <div className="container mx-auto">
        <div className="h-12">
          <div className="flex justify-between items-center h-full">
            <div className="flex">
              <Link
                href="/"
                className="font-bold uppercase text-2xl hover:text-blue-700 transition-all ease-in"
              >
                ZA
              </Link>
              <ul className="flex items-center space-x-4 text-sm uppercase">
                {navItems.map((navItem) => (
                  <li key={navItem.label}>
                    <Link className="hover:text-blue-700" href={navItem.to}>
                      {navItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>socials</div>
          </div>
        </div>
      </div>
    </div>
  );
}
