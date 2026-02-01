'use client';

import { useState, useTransition } from "react";
import { cn } from "@/app/lib/utils";
import { Shirt, ArrowBigUpDash } from 'lucide-react';

export function ProfileImages(content: { images: string }) {
  const [state, setState] = useState(false);

  let contentImages;
  if (state) {
    contentImages = (
      <div className="grid grid-cols-4">
        imagen garments
      </div>
    )
  } else {
    contentImages = (
      <div className="grid grid-cols-4">
        imagen outfits
      </div>
    )
  }

  return (
    <div>
      <div className="w-full mt-3 flex justify-around ">
        <button className={
          cn("p-2 box-border border-b-2", state ? "hover:cursor-pointer border-background" : "border-foreground-500")
        } onClick={() => setState(false)}><Shirt/></button>
        <button className={
          cn("p-2 box-border border-b-2", !state ? "hover:cursor-pointer border-background" : "border-foreground-500")
        } onClick={() => setState(true)}><ArrowBigUpDash/></button>
      </div>
      <div className=" h-px mt-2 mb-3 bg-gray-500 ml-auto mr-auto "></div>
      {contentImages}
    </div>
  )
}