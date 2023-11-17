
// 'use client'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import axios from 'axios'
import { CategoryType } from '@/types/types'
// import {useBlogContext} from '@/context/BlogContext'
import blogServices from '@/services/blogServices'
// const getData = async()=>{
//     const res = await axios.get("http://localhost:3000/api/category")
//     return res.data
// } 

const CategoryList = async() => {

//    const categories:CategoryType[] = await getData(); 
   const categories:CategoryType[] = await blogServices.getData() 
// const { categories } = useBlogContext();
// console.log("🚀 ~ file: CategoryList.tsx:15 ~ CategoryList ~ categories:", categories)
  return (
    <div className='flex flex-col gap-5  border-spacing-x-2 mt-5'>
        <h1 className=" my-12 mx-0 bg-gradient-to-r from-blue-400 to-cyan-900 bg-clip-text text-transparent text-4xl  font-bold  dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-900 dark:bg-clip-text dark:text-transparent  transition hover:scale-105">Categorias populares</h1>
        <div className='flex flex-wrap justify-between gap-5 '>

            {
                categories.map((category:CategoryType)=>{
                    return(
                        <Link 
                            href={`/blog?cat=${category.slug}`}    
                            className={`flex items-center gap-2  h-20 w-80 md:w-auto justify-center border-spacing-x-2 bg-border dark:bg-primary-foreground p-4 rounded-lg transition hover:bg-sky-200 dark:hover:bg-secondary`}
                            key={category.id}
                        >
                            <Avatar>
                                <AvatarImage src={category.img} />
                                <AvatarFallback>{category.title}</AvatarFallback>
                            </Avatar>
                            <h1 className=" bg-gradient-to-r from-blue-400 to-cyan-900 bg-clip-text text-transparent text-xl  font-bold  dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-900 dark:bg-clip-text dark:text-transparent  transition hover:scale-105">{category.title}</h1>
                        </Link>
                    )
                })
            }
        </div>
    </div>
  )
}

export default CategoryList
