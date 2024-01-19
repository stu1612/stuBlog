"use client";

// npm
import { usePathname } from "next/navigation";
import Link from "next/link";

// files
import { navLinks } from "@/constants";

export default function NavItems() {
  // properties
  const pathname = usePathname();

  return navLinks.map((link) => (
    <Link
      href={`${link.href}`}
      key={link.id}
      className={`${
        pathname === link.href ? "underline underline-offset-8" : ""
      } nav p-medium-18 uppercase text-slate-800 flex flex-row items-center lg:p-medium-16 my-3 md:mx-3 transition-transform ease-linear lg:hover:text-[#181818]`}
    >
      <figure className="pr-2">{link.icon}</figure>

      {link.title}
    </Link>
  ));
}
