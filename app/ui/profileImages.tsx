'use client';

import { useState, useTransition } from "react";
import { cn } from "@/app/lib/utils";

export function ProfileImages(content: { images: string }) {
  const [state, setState] = useState(false);

  let contentImages;
  if (state) {
    contentImages = (
      <div>
        imagen garments
      </div>
    )
  } else {
    contentImages = (
      <div>
        imagen outfits
      </div>
    )
  }

  return (
    <div>
      <div>
        <button onClick={() => setState(false)}>garments</button>
        <button onClick={() => setState(true)}>outfits</button>
      </div>
      {contentImages}
    </div>
  )
}