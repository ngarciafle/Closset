"use client";

import { useState } from "react";
import { optionsMain } from "../lib/constants";

export default function Home() {
  let [optionSelected, setOptionSelected] = useState("for-you");
  
  if (optionSelected === "garments") {

  } else if (optionSelected === "outfits") {

  } else if (optionSelected === "profiles") {

  }

  if (optionSelected === "for-you") {

  } else if (optionSelected === "following") {

  } else if (optionSelected === "trending") {

  } else if (optionSelected === "new") {

  }

  return (
    <main>
      <div className="flex gap-4 ml-1 ">
        {optionsMain.map((option) => (
          <button
            onClick={() => setOptionSelected(option.tag)}
            className={`flex items-center justify-center mt-2 py-1.5 px-2 rounded-2xl shadow ${optionSelected === option.tag ? "bg-foreground/90 text-background shadow-indigo-500/10 dark:shadow-amber-50/50" : "bg-background-secondary dark:shadow-amber-50/50 shadow-indigo-500/10"}`}
            key={option.tag}
          >
            {option.name}
          </button>
        ))}
      </div>
      <div className="bg-foreground/20 h-[0.3px] mt-3 "></div>
    </main>
  );
}
