import Featured from '@/components/Featured'
import CategoryList from '@/components/CategoryList'
import PostList from '@/components/PostList'
import Menu from '@/components/Menu'


export default function Home({searchParams}:any) {
  const page = parseInt(searchParams.page) || 1;
  
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <Featured/>
        <CategoryList />
        <div className='flex gap-12  p-2 mt-12 justify-between'>
          <PostList page={page} cat={""}/>
          <Menu/>
        </div>
    </div>
  )
}
