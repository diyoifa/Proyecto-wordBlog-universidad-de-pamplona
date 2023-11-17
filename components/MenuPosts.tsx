import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'
import { Badge } from "@/components/ui/badge"
import blogServices from '@/services/blogServices'
import { format, set } from 'date-fns';


type MenuPostsProps = {
    withImage:boolean
}

const MenuPosts = async({withImage}:MenuPostsProps) => {
   
    const {posts} = await blogServices.getPosts()

  return (
    <div className='hidden md:flex md:flex-col gap-3 mb-12 mt-2'>

        {
            posts
            .slice(0,3)
            .map((post:any) =>
            <Link href={`/posts/${post.slug}`} className='flex justify-center gap-2 mb-4 mt-4' key={post.id}>
            {
                withImage && (
                    <Avatar>
                        <AvatarImage src={post.img} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                )
            }
            <div className='flex flex-col gap-1'>
                <Badge className='min-w-fit justify-center p-2'>{post.catSlug}</Badge>
                <Badge variant="primary" className='w-auto justify-center p-2'>Visitas: {post.views}</Badge>
                <h3 className='text-base text-slate-500'>
                    {post.title}
                </h3>
                <div className='flex gap-2'>
                    <Badge variant="secondary">{post.userEmail}</Badge>
                    <Badge>{format(new Date(post?.createdAt), 'dd/MM/yyyy')}</Badge>
                </div>
            </div>
        </Link>
            )
        }
    </div>
  )
}

export default MenuPosts
