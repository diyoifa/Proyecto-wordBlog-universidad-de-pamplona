'use client'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import blogServices from '@/services/blogServices';
import { CategoryType } from '@/types/types';

const BlogContext = createContext<{ categories: CategoryType[] }>({ categories: [] });

interface Props {
  children: ReactNode;
}

export function BlogProvider({ children }: Props) {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await blogServices.getData();
        setCategories(data);
      } catch (error) {
        // Maneja los errores de la carga de datos si es necesario.
      }
    };

    fetchData();
  }, []); 

  return (
    <BlogContext.Provider value={{ categories }}>
      {children}
    </BlogContext.Provider>
  );
}

export const useBlogContext = () => useContext(BlogContext);
