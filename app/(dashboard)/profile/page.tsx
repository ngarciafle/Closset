import Image from "next/image"
import { Settings } from "lucide-react"
import { getSession } from "@/app/data/getSession"
import Link from "next/link";
import { getFollow } from "@/app/data/getFollower";
import { getFollowing } from "@/app/data/getFollowing";
import { Suspense } from "react";
import { BioEditor } from "@/app/ui/profileBio";
import { ProfileImages } from "@/app/ui/profileImages";

export default async function ProfilePage() {
    const session = await getSession();
    const followers = await getFollow(session?.id);
    const following = await getFollowing(session?.id);



    return (
        <main className="pt-12 pl-32 pr-32">
            <div id="hero" className="flex flex-row justify-center">
                <Image
                    src={session?.image || '/default-profile.png'}
                    width={250}
                    height={250}
                    alt="Profile image"
                    className="mr-40"
                />
                <div className="flex flex-col">
                    <div id="data" className="flex flex-row gap-6 ">
                        <p className="pr-6">{session?.username}</p>
                        <p className="text-nowrap">Followers  <Suspense><span>{followers}</span></Suspense></p>
                        <p className="text-nowrap">Following  <Suspense><span>{following}</span></Suspense></p>
                        <Link href="/settings">
                            <Settings/>
                        </Link>
                    </div>
                    <BioEditor initialBio={session?.bio || ""} />
                </div>
            </div>
            <div id="content">

            </div>
            <ProfileImages images={session?.image || '/default-profile.png'} />
        </main>
    )
}