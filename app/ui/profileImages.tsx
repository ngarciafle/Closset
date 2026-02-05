'use client';

import { useState, useTransition } from "react";
import { cn } from "@/app/lib/utils";
import { Shirt, ArrowBigUpDash } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";
export default function ProfileImages(props: { userName: string, garments: any[] }) {
  const [state, setState] = useState(false);

  let contentImages;
  if (state) { // show outfit images 
    contentImages = (
      <div className="grid grid-cols-4">
        imagen outfits
      </div>
    )
  } else {
    contentImages = ( // show garment images
      <div className="grid grid-cols-4 md:grid-cols-3 w-full ">
      {props.garments.length == 0 ? <p>No garments available</p> : props.garments.map((garment: any) => ( 
        <Link href={`/garment/${garment.id}`} key={garment.id} className="relative group w-full overflow-hidden block" style={{ aspectRatio: '3/4' }}> 
          <Image  
            src={garment.images?.[0]} // only the first image --> build selector of main image?? 
            alt={garment.name || "Garment Image"}
            className="object-cover"
            fill
          />
          {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div> */}
        </Link>
      ))}
    </div>
    )
  }

  return (
    <div className="pt-4 md:px-12 lg:px-32 w-full">
      <div className="w-full mt-3 flex justify-around ">
        <button className={
          cn("p-2 box-border border-b-2", state ? "hover:cursor-pointer border-background" : "border-foreground-500")
        } onClick={() => setState(false)}><Shirt/></button>
        <button className={
          cn("p-2 box-border border-b-2", !state ? "hover:cursor-pointer border-background" : "border-foreground-500")
        } onClick={() => setState(true)}><ArrowBigUpDash/></button>
      </div>
      <div className=" h-px mt-1 bg-gray-500 ml-auto mr-auto "></div>
      {contentImages}
    </div>
  )
}