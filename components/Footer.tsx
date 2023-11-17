import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Footer = () => {
  return (
    <div className=" flex flex-col items-center md:flex md:flex-row mt-12 md:items-center md:justify-between dark:bg-primary-foreground bg-border dark:text-primary">
      <div className="flex flex-1 flex-col gap-4 p-16">
        <div className="flex items-center gap-3 rounded-full">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className=" bg-gradient-to-r from-blue-400 to-cyan-900 bg-clip-text text-transparent text-2xl  font-bold  dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-900 dark:bg-clip-text dark:text-transparent  transition hover:scale-105">
                    WorldBlog
            </h1>
        </div>
        <p className="font-bold text-slate-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
          porro sequi, totam minima consequuntur, aspernatur deleniti vero
          repellendus dorales.
        </p>
        <div className="flex  flex-1 gap-3">
          <Image
            src="/facebook.png"
            alt="facebook"
            width={24}
            height={24}
            className="cursor-pointer transition hover:scale-150"
          />
          <Image
            src="/instagram.png"
            alt="instagram"
            width={24}
            height={24}
            className="cursor-pointer transition hover:scale-150"
          />
          <Image
            src="/tiktok.png"
            alt="tiktok"
            width={24}
            height={24}
            className="cursor-pointer transition hover:scale-150"
          />
          <Image
            src="/youtube.png"
            alt="youtube"
            width={24}
            height={24}
            className="cursor-pointer transition hover:scale-150"
          />
        </div>
      </div>
      <div className="flex flex-1 justify-evenly p-16">
        <div className="flex flex-col gap-3 font-normal">
          <span className="font-bold">Links</span>
          <Link href="/" className="hover:text-primary md:hover:text-primary dark:hover:text-secondary text-slate-600">Inicio</Link>
          <Link href="/" className="hover:text-primary md:hover:text-primary dark:hover:text-secondary text-slate-600">Blog</Link>
          <Link href="/" className="hover:text-primary md:hover:text-primary dark:hover:text-secondary text-slate-600">Acerca</Link>
          <Link href="/" className="hover:text-primary md:hover:text-primary dark:hover:text-secondary text-slate-600">Contacto</Link>
        </div>
        <div className="flex flex-col gap-3 font-normal">
          <span className="font-bold">Tags</span>
          <Link href="/" className="hover:text-primary md:hover:text-primary dark:hover:text-secondary text-slate-600">estilo</Link>
          <Link href="/" className="hover:text-primary md:hover:text-primary dark:hover:text-secondary text-slate-600">Moda</Link>
          <Link href="/" className="hover:text-primary md:hover:text-primary dark:hover:text-secondary text-slate-600">Programacion</Link>
          <Link href="/" className="hover:text-primary md:hover:text-primary dark:hover:text-secondary text-slate-600">Viajes</Link>
        </div>
        <div className="flex flex-col gap-3 font-normal">
          <span className="font-bold">Socials</span>
          <Link href="/" className="hover:text-primary md:hover:text-primary dark:hover:text-secondary text-slate-600">Facebook</Link>
          <Link href="/" className="hover:text-primary md:hover:text-primary dark:hover:text-secondary text-slate-600">Instagram</Link>
          <Link href="/" className="hover:text-primary md:hover:text-primary dark:hover:text-secondary text-slate-600">Tiktok</Link>
          <Link href="/" className="hover:text-primary md:hover:text-primary dark:hover:text-secondary text-slate-600">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
