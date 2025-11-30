"use client";
import React from "react";
import Link from "next/link";
import classnames from "classnames";
import { usePathname } from "next/navigation";
import { IoBugSharp } from "react-icons/io5";
import { useSession } from "next-auth/react";
//import "@radix-ui/themes/styles.css";



import { Avatar, Box, Button, Container, DropdownMenu, Flex,Text } from "@radix-ui/themes";
const NavBar = () => {

  const list = [
    { href: "/", label: "Dashboard" },
    { href: "/issues/list", label: "Issues" },
  ];
  const { status, data: session } = useSession();
  const currentPath = usePathname();
  console.log(session);

  return (
    <nav className=" text-black border-b mb-4 h-16 py-5 border-b-gray-300 ">
      <Container>
        <Flex justify="between" align="center">
        <Flex align="center">
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
        </Flex>
        <Box>
          {status === "authenticated" && (
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
               <Avatar className="cursor-pointer" src={session.user?.image!} fallback = "?" size="3" radius="full"></Avatar> 
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Label>
                  <Text size='4'>{session.user?.email}</Text>
                  </DropdownMenu.Label>
                  <DropdownMenu.Item >
              <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>  
                  </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          )}
          {status === "unauthenticated" && (
            <Link href="http://localhost:3000/api/auth/signin">Signin</Link>
          )}
        </Box>
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
