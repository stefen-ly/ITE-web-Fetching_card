import Link from "next/link";

type MenuItem = {
  path: string;
  name: string;
};

const menuObject: MenuItem[] = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/contact", name: "Contact" },
  { path: "/product", name:"Product" }
];

export default function NavigationMenu() {
  return (
    <nav className="px-5">
      {menuObject.map((item) => (
        <Link key={item.path} href={item.path} className="mr-10">
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
