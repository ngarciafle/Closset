import Link from "next/link";
import Image from "next/image";
import { Home, Tag, ShoppingBag, Heart, MessageSquare, User, UsersRound } from "lucide-react";


export function SideNav() {
    return (
        <aside className="bg-background-secondary flex flex-col h-lvh w-20 pt-16 top-0 z-10 gap-4 items-center">
            <Link href="/" className=" flex flex-col items-center group">
                <Home className="group-hover:stroke-3"/>
                <p>Home</p>
            </Link>
            <Link href="/" className=" flex flex-col items-center group">
                <MessageSquare className="group-hover:fill-foreground"/>
                <p>Messages</p>
            </Link>
            <Link href="/" className=" flex flex-col items-center group">
                <Heart/>
                <p>Wishlist</p>
            </Link>
            <Link href="/" className=" flex flex-col items-center group">
                <UsersRound/>
                <p>Exchange</p>
            </Link>
            <Link href="/" className=" flex flex-col items-center group">
                <User/>
                <p>My </p>
            </Link>


        </aside>
    )
}