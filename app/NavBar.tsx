"use client";
import React from "react";
import Link from "next/link";
import classnames from "classnames";
import { usePathname } from "next/navigation";
import { IoBugSharp } from "react-icons/io5";
import { useSession } from "next-auth/react";
import { Box } from "@radix-ui/themes";
const NavBar = () => {
  const list = [
    { href: "/", label: "Dashboard" },
    { href: "/issues/list", label: "Issues" },
  ];
const {status,data:session}= useSession()
  const currentPath = usePathname();
  return (
    <nav className="flex space-x-4 px-5 text-black border-b mb-4 h-14 items-center border-b-gray-300 ">
      <Link href="/" className="hover:font-bold">
        <IoBugSharp />
      </Link>
      <ul className="flex space-x-6  mx-5">
        {list.map((list) => (
          <Link
            key={list.href}
            href={list.href}
            className={classnames({
              "text-zinc-900": currentPath === list.href,
              "text-zinc-400": currentPath !== list.href,
              "hover:text-zinc-700 ": true,
            })}
          >
            {list.label}
          </Link>
        ))}
      </ul>
      <Box>{status === "authenticated"?<Link href='http://localhost:3000/api/auth/signout'>Logout</Link>:<Link href='http://localhost:3000/api/auth/signin'>Signin</Link>}</Box>
    </nav>
  );
};

export default NavBar;
