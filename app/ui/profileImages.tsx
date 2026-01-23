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
      <div>
        <button onClick={() => setState(false)}><Shirt/></button>
        <button onClick={() => setState(true)}><ArrowBigUpDash/></button>
      </div>
      {contentImages}
    </div>
  )
}