import Menu from '@/components/Menu';
import PostList from '@/components/PostList';
import React from 'react'

const page = ({searchParams}:any) => {
    const page = parseInt(searchParams.page) || 1;
    const {cat}:{cat:string | undefined} = searchParams;
    // console.log("🚀 ~ file: page.tsx:6 ~ page ~ cat:", cat)
    
    return (
    <div className='mt-16 p-12'>
        <h1 className="p-4 text-center mb-1 mt-8 mx-0 bg-gradient-to-r from-blue-400 to-cyan-900 bg-clip-text text-transparent text-4xl  font-bold  dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-900 dark:bg-clip-text dark:text-transparent  transition hover:scale-105">
            Blog de {cat}
        </h1>
        <div className='flex gap-12 p-16 justify-between'>
            <PostList page={page} cat={cat}/>
            <Menu/>
        </div>
    </div>
  )
}
export default page
