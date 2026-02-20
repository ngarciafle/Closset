"use client";
import { useState } from "react";
import { tags } from "@/app/lib/constants";
import { cn } from "@/app/lib/utils";

export default function ConfigureTags() {
  const [selectedTags, setSelectedTags] = useState();
  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-4 grid-cols-5 gap-2">
      {/* need to build a navegation */}
      {tags.map((tag) => {
        return (
          <div className={cn("flex flex-row items-center gap-1", tag.color)} key={tag.tag}>
            <label className="" htmlFor={tag.tag}>{tag.name}</label>
            <input type="checkbox" className="appearance-none" id={tag.tag} name={tag.tag} value={tag.tag}/>
          </div>
        ) 
      })}
    </div>
  )
}