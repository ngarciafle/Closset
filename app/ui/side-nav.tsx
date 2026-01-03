import Link from "next/link";
import Image from "next/image";
import { Home, Tag, ShoppingBag, Heart, MessageSquare, User, UsersRound } from "lucide-react";


export function SideNav() {
    return (
        <aside className="bg-background-secondary flex flex-col h-lvh w-20 pt-16 top-0 z-10 gap-8 items-center">
            <Link href="/" className=" flex flex-col items-center group">
                <Home className="group-hover:stroke-3"/>
                <p className="text-xs">Home</p>
            </Link>
            <Link href="/messages/" className=" flex flex-col items-center group">
                <MessageSquare className="group-hover:fill-foreground"/>
                <p className="text-xs">Messages</p>
            </Link>
            <Link href="/wishlist" className=" flex flex-col items-center group">
                <Heart/>
                <p className="text-xs">Wishlist</p>
            </Link>
            <Link href="/exchanges" className=" flex flex-col items-center group">
                <UsersRound/>
                <p className="text-xs">Exchanges</p>
            </Link>
            <Link href="/profile-public" className=" flex flex-col items-center group">
                <User/>
                <p className="text-xs">My closet</p>
            </Link>


        </aside>
    )
}