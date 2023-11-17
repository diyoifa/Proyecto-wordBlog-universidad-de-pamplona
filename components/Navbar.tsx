'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DetailsDialog from "./blogDetails";
import { Button } from "./ui/button";
import { useSession, signIn, signOut } from "next-auth/react";
import ProfileOptions from "./ProfileOptions";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const { data: session } = useSession();

  return (
    <nav className=" bg-border w-full  fixed top-0 left-0 right-0 z-10 dark:bg-primary-foreground">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="flex items-center gap-2 mb-1">
              <Link href="/">
                <h1 className=" bg-gradient-to-r from-blue-400 to-cyan-900 bg-clip-text text-transparent text-4xl  font-bold  dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-900 dark:bg-clip-text dark:text-transparent  transition hover:scale-105 pl-9 pb-1">
                  WorldBlog
                </h1>
              </Link>
              <DetailsDialog />
            </div>
            <div className="md:hidden">
              <button
                className="p-2 text-primary rounded-md outline-none focus:border-border focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <Image src="/close.svg" width={40} height={40} alt="logo" />
                ) : (
                  <Image
                    src="/hamburger-menu (2).svg"
                    width={40}
                    height={40}
                    alt="logo"
                    className="focus:border-none active:border-none"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "p-12 md:p-0 block" : "hidden"
            }`}
          >
            <ul className="h-screen md:h-auto items-center justify-center md:flex">
              <li>
                <ThemeSwitcher />
              </li>
              <li className=" pb-2 text-xl text-black py-2 dark:text-primary md:px-6 text-center border-b-2 md:border-b-0  hover:bg-transparent hover:text-primary  border-border  md:hover:text-primary dark:hover:text-secondary md:hover:bg-transparent transition hover:scale-105">
                {session?.user ? (
                  <ProfileOptions/>
                ) : (
                  <Button onClick={() => signIn()}>Iniciar sesion</Button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Separator className="bg-primary" />
    </nav>
  );
}

export default NavBar;
