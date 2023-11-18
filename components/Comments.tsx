'use client'

import React from 'react'
import { format, set } from 'date-fns';

import { Button } from "@/components/ui/button"
import {useForm} from 'react-hook-form'
import { TypecommentSchema, commentSchema } from '@/Schemas/CommentSchema'
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link'
import { useSession } from "next-auth/react";
import blogServices from '@/services/blogServices'
import { Comment } from '@prisma/client';

import { ReloadIcon } from "@radix-ui/react-icons"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';



const Comments = ({postSlug}:{postSlug:string}) => {
    // console.log("🚀 ~ file: Comments.tsx:22 ~ Comments ~ postSlug:", postSlug)
    
    const[isLoading, setIsLoading] = React.useState(false)
    const[comments, setComments] = React.useState<Comment[]>([])
    // console.log("🚀 ~ file: Comments.tsx:21 ~ Comments ~ data:", comments)

    const { data: session } = useSession();
    
    React.useEffect(() => {
        setIsLoading(true)
        blogServices.getComments(postSlug)
            .then(data => {
                setComments(data)
                setTimeout(() => {
                    setIsLoading(false)
                }, 2000)
            }).catch(error => {
                // console.error("Error fetching comments:", error)
                setIsLoading(false)
            })
    }, [postSlug, setComments])
    

    

    const onSumbit = async (data:TypecommentSchema) => {
        const object = {
            content: data.content,
            postSlug
        }
        // console.log("🚀 ~ file: Comments.tsx:51 ~ onSumbit ~ object:", object)
        await blogServices.createComment(object)
        const newComments = await blogServices.getComments(postSlug)
        setComments(newComments)
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
        reset()
    }


    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm<TypecommentSchema>({
        resolver: zodResolver(commentSchema)
    });

    return (
    <div className='my-8 mx-0'>
        <h1 className="p-4 text-center mb-1 mt-8 mx-0 bg-gradient-to-r from-blue-400 to-cyan-900 bg-clip-text text-transparent text-4xl  font-bold  dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-900 dark:bg-clip-text dark:text-transparent  transition hover:scale-105">
         Comentarios
        </h1>
        {
            session?.user ? (
                <form onSubmit={handleSubmit(onSumbit)} className='flex flex-col gap-5'>
                    <div className='flex gap-8 items-center justify-center'>
                        <textarea
                            {...register("content")} 
                            placeholder='Deja un comentario'
                            className='px-4 py-0 w-40 md:w-full rounded-md'
                        />
                        {
                            isLoading ?(
                                <Button disabled>
                                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                                    enviando
                                </Button>
                            ) : (
                                <Button variant={'secondary'} type="submit">
                                    Enviar
                                </Button>
                            )
                        }
                    </div>
                    {errors?.content && <Badge variant={'destructive'} className='  md:w-1/4'>{errors.content?.message}</Badge>}
                </form>
            ) : (
                <Link href="/">Inicia sesion para comentar</Link>
            )}
            <div className='mt-12'>
                {
                    isLoading ? (
                        <div className='flex items-center justify-center'>
                            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                            cargando
                        </div>
                    ) : (
                        
                        comments?.map((comment:any) => (
                            <div key={comment.id} className='flex gap-4 md:flex md:flex-row md:gap-5 items-center justify-center'>
                                <div className="relative w-12 h-12 mt-10 col-span-1">
                                    <Avatar>
                                        <AvatarImage src={comment.user?.image}/>
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </div>
                                <div className='mt-8 flex flex-col gap-2 md:flex-row items-center justify-center'>
                                    <div className='flex md:flex-col  gap-2 md:mt-8'>
                                        <Badge variant='secondary'>{comment.user?.name}</Badge>
                                        <Badge>{format(new Date(comment?.createdAt), 'dd/MM/yyyy')}</Badge>
                                    </div>
                                    <div className='md:mt-8 flex-auto rounded-sm border-secondary bg-secondary  min-w-fit  w-auto h-auto p-4'> 
                                        <span>{comment?.content}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
    </div>
  )
}

export default Comments
