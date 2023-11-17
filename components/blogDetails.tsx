"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Github, HelpCircle, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const DetailsDialog = (props: Props) => {
  return (
    <Dialog>
      <DialogTrigger>
        <span className="flex items-center px-2 py-1 text-white rounded-md bg-slate-800">
          ¿Que es?
          <HelpCircle className="w-5 h-5 ml-1" />
        </span>
      </DialogTrigger>
      <DialogContent className="w-[70vw] max-w-[100vw] md:w-[50vw]">
        <DialogHeader>
          <DialogTitle className="bg-gradient-to-r from-blue-400 to-cyan-900 bg-clip-text text-transparent text-2xl  font-bold  dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-900 dark:bg-clip-text dark:text-transparent  transition hover:scale-105">Bienvenido a World Blog!</DialogTitle>
          <DialogDescription>
            <div className="flex items-center gap-3 my-2">
              <p className="flex items-center">
                <Github className="w-5 h-5" />
                <Link
                  className="ml-1 underline"
                //   target="_blank"
                  href="https://github.com/diyoifa"
                >
                  GitHub
                </Link>
              </p>
              <p className="flex items-center">
                <Youtube className="w-5 h-5" />
                <Link
                  className="ml-1 underline"
                //   target="_blank"
                  href="https://www.youtube.com/channel/UCRgfOJ_1mXgNzZfAARcEkyg"
                >
                  YouTube
                </Link>
              </p>
            </div>
            <p className="my-2 mt-4 ">
            ¡Bienvenido a World Blog, tu ventana a un mundo de posibilidades! En nuestro espacio digital, te ofrecemos un viaje virtual a través de una variedad de temas fascinantes. Desde inspiradoras aventuras de viaje hasta la última moda, pasando por las últimas tendencias en programación y tecnología, aquí encontrarás una comunidad apasionada que comparte sus experiencias, ideas y conocimientos.
            </p>
            <hr/>
            <p className="my-2 font-semibold">
              <h4 className="bg-gradient-to-r from-blue-400 to-cyan-900 bg-clip-text text-transparent text-xl  font-bold  dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-900 dark:bg-clip-text dark:text-transparent  transition hover:scale-105">Construido usando</h4>
              <div className="grid justify-around md:grid-cols-4 grid-cols-2 mt-2 gap-y-3">
                {/* <div className="flex items-center gap-2">
                  <Image
                    alt="planetscale"
                    src="/planetscale.png"
                    width={35}
                    height={35}
                  />
                  <span className="">Planet Scale</span>
                </div> */}
                <div className="flex items-center gap-2">
                  <Image
                    alt="nextjs"
                    src="/nextjs.png"
                    width={35}
                    height={35}
                  />
                  <span className="">Next.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    alt="tailwind"
                    src="/tailwind.png"
                    width={35}
                    height={35}
                  />
                  <span className="">Tailwind</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    alt="nextauth"
                    src="/nextauth.png"
                    width={30}
                    height={30}
                  />
                  <span className="">NextAuth</span>
                </div>
                <div className="flex items-center gap-2">
                <Image
                    alt="planetscale"
                    src="/planetscale.png"
                    width={35}
                    height={35}
                  />
                  <span className="">Firebase</span>
                </div>

                <div className="flex items-center gap-2">
                    <Image
                    alt="react query"
                    src="/react-query.png"
                    width={30}
                    height={30}
                  />
                  <span className="">Mongo DB</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    alt="primsa"
                    src="/prisma.png"
                    width={30}
                    height={30}
                  />
                  <span className="">Prisma</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    alt="typescript"
                    src="/typescript.png"
                    width={30}
                    height={30}
                  />
                  <span className="">TypeScript</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    alt="trpc"
                    src="/trpc.png"
                    width={30}
                    height={30}
                  />
                  <span className="">Shadcn/UI</span>
                </div>
              </div>
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DetailsDialog;