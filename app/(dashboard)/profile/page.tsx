import Image from "next/image"
import { Settings } from "lucide-react"
import { getSession } from "@/app/data/getSession"
import Link from "next/link";
import { getFollow } from "@/app/data/getFollower";
import { getFollowing } from "@/app/data/getFollowing";
import { Suspense } from "react";

export default async function ProfilePage() {
    const session = await getSession();
    const followers = await getFollow(session?.userId);
    const following = await getFollowing(session?.userId);
    return (
        <main className="pt-12 pl-24">
            <div id="hero" className="flex flex-row">
                <Image
                    src={session?.image || '/default-profile.png'}
                    width={250}
                    height={250}
                    alt="Profile image"
                    className="mr-40"
                />
                <div id="data" className="flex flex-row gap-6 ">
                    <p>{session?.userName}</p>
                    <p>Followers  <Suspense><span>{followers}</span></Suspense></p>
                    <p>Following  <Suspense><span>{following}</span></Suspense></p>
                    <Link href="/settings">
                        <Settings/>
                    </Link>
                </div>
            </div>
            <div id="content">

            </div>
            <div>

            </div>
        </main>
    )
}