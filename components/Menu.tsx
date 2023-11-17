import React from 'react'
import MenuPosts from './MenuPosts'
import MenuCategories from './MenuCategories'

const Menu = () => {
  return (
    <div className='hidden md:flex md:flex-col md:flex-1 p-2 my-12'>
        <h2 className='text-base text-slate-600'>
            Lo mas buscado
        </h2>
        <h1 className='text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-900 bg-clip-text text-transparent  dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-900 dark:bg-clip-text dark:text-transparent  transition hover:translate-x-2'>
            lo mas popular
        </h1>
        <MenuPosts withImage={true}/>
        <h2 className='text-base text-slate-600'>
            Descubre un tema interesante
        </h2>
        <h1 className='text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-900 bg-clip-text text-transparent  dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-900 dark:bg-clip-text dark:text-transparent  transition hover:translate-x-2'>
            Categorias
        </h1>
        <MenuCategories/>
    </div>
  )
}

export default Menu
