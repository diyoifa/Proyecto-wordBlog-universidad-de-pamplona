import React from "react";
import { badgeVariants } from "@/components/ui/badge";
import Link from "next/link";
import blogServices from "@/services/blogServices";
import { CategoryType } from "@/types/types";

const MenuCategories = async() => {
  const categories:CategoryType[] = await blogServices.getData();
  return (
    <div className="flex flex-wrap p-4 gap-3 text-2xl">
      
      {
        categories.map((category)=>{
          return(
            <Link
              href={`/blog?cat=${category.slug}`}
              className={badgeVariants({ variant: "category" })}
              key={category.id}
            >
              {category.title}
            </Link>
          )
        })
      }
    </div>
  );
};

export default MenuCategories;
