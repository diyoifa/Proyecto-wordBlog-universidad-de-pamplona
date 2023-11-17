import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import blogServices from "@/services/blogServices";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Comments from "@/components/Comments";
import Menu from "@/components/Menu";
import { Separator } from "@/components/ui/separator";

const SinglePage = async ({ params }: any) => {
  const { slug }: { slug: string } = params;
  const  data  = await blogServices.getSinglePost(slug);
  // console.log("🚀 ~ file: page.tsx:16 ~ SinglePage ~ data:", data);
  return (
    <div className="mt-12 p-8">
      <div className="flex  items-center gap-12 p-8 md:p-16 justify-center">
        <div className="flex flex-1 flex-col gap-5 ">
          <h1 className="text-5xl  py-2 px-0 text-left mb-1 mt-8 mx-0 bg-gradient-to-r from-blue-400 to-cyan-900 bg-clip-text text-transparent  font-bold  dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-900 dark:bg-clip-text dark:text-transparent  transition hover:scale-105">
          {data?.title}
          </h1>
          <div className="flex items-center gap-5">
            <div className="relative w-12 h-12">
              <Avatar>
                <AvatarImage src={data.user.image}/>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col gap-1">
              <Badge variant="secondary">Gregorio cardona</Badge>
              <Badge>23/09/2023</Badge>
            </div>
          </div>
        </div>
        <div className="hidden relative  md:flex md:flex-1 h-[350px] ">
          <Image
            src={data.img}
            alt="post"
            fill
            className="object-cover w-max rounded-md transition hover:scale-110"
          />
        </div>
      </div>
      <Separator className="bg-primary" />
      <div className="flex gap-12 p-16 justify-center">
        <div className="flex-auto md:w-3/5 w-full">
          {/* <div className='flex-auto w-3/4'> */}
          <div
            className="md:text-2xl font-normal mb-5 w-full overflow-auto bg-secondary p-8 rounded-md dark:bg-secondary-dark"
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />

          <div>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
