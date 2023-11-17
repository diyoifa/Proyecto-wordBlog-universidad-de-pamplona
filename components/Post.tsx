import Image from 'next/image'
import Link from 'next/link'
import { Separator } from './ui/separator'

interface Item{
  title:string,
  desc:string,
  createdAt: string,
  img:string,
  catSlug:string,
  slug:string

}

const Post = (item:Item) => {

  return(
    <div className='bg-border p-2 rounded-md flex gap-12 mb-12 items-center'>
     
      <div className="hidden md:flex md:flex-1 relative h-80 "> 
        <Image src={item.img} alt="post" fill className="object-cover w-max rounded-md transition hover:translate-x-2 hover:translate-y-[4px]" /> 
      </div>
    
      <div className='flex flex-1  flex-col'>
        <div className='flex'>
          <span className='text-base text-slate-700'>{item.createdAt}-</span>
          <span className='text-base text-red-500'>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1 className="my-4 md:my-12 mx-0 bg-gradient-to-r from-blue-400 to-cyan-900 bg-clip-text text-transparent text-4xl  font-bold  dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-900 dark:bg-clip-text dark:text-transparent  transition hover:scale-105">{item.slug}</h1> 
        </Link>
        {/* <p className='text-base text-slate-700'>
            {
              item.desc.substring(0,60)
            }
        </p> */}
        <div className='text-base text-slate-700' dangerouslySetInnerHTML={{ __html: item?.desc.substring(0,60) }}/>
        <Link href={`/posts/${item.slug}`} className='text-base font-bold border-b-primary mb-3 md:mb-1'>
            leer mas
            <Separator className='bg-primary w-1/3'/>
        </Link>
      </div>
    </div>
  )
}

export default Post