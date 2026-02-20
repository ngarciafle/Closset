"use client";
import { useState } from "react";
import { tags } from "@/app/lib/constants";

export default function ConfigureTags() {
  const [selectedTags, setSelectedTags] = useState();
  return (
    <div className="flex flex-row gap-2">
      {tags.map((tag) => {
        return (
          <div className={`flex flex-row items-center gap-1 ${tag.color}`} key={tag.tag}>
            <label className="" htmlFor={tag.tag}>{tag.name}</label>
            <input type="checkbox" id={tag.tag} name={tag.tag} value={tag.tag}/>
          </div>
        ) 
      })}
    </div>
  )
}