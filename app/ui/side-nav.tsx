'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/app/lib/utils";
import { linkSideNav } from "../lib/constants";

export function SideNav() {
    const path = usePathname();
    return (
        <aside className="bg-background-secondary flex flex-col h-lvh w-24 pt-16 top-0 z-10 gap-8 items-center">
            {linkSideNav.map((link) => {
                return (
                    <Link href={link.href} key={link.name} className={
                        cn(
                            "flex flex-col items-center group rounded-sm w-15 py-2",
                            { "bg-gray-700": path === link.href }
                        )
                    }>
                        <link.icon className="group-hover:stroke-3"/>
                        <p className="text-xs font-barlow">{link.name}</p>
                    </Link>
                )
            })}
        </aside>
    )
}