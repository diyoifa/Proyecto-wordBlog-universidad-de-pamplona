import React from 'react'
import Pagination from './Pagination'
import Post from './Post'
import blogServices from '@/services/blogServices'

type PostListProps = {
  cat: string | undefined,
  page: number
}


const PostList = async({page, cat}:PostListProps) => {

  const { posts, count } = await blogServices.getPosts(page, cat);
  
  const POST_PER_PAGE = 2;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className='flex-col flex-1'>
        <h1 className=" my-12 mx-0 bg-gradient-to-r from-blue-400 to-cyan-900 bg-clip-text text-transparent text-4xl  font-bold  dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-900 dark:bg-clip-text dark:text-transparent  transition hover:scale-105">Posts Recientes</h1>
        <div className='mt-5'>
            {
              posts.map((post:any) => <Post key={post.slug} {...post}/>)
            }
        </div>
        <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext}/>
    </div>
  )
}

export default PostList
