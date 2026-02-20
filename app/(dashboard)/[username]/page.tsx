import Image from "next/image"
import { Settings } from "lucide-react"
import { getSession } from "@/app/data/getSession"
import Link from "next/link";
import { getFollow } from "@/app/data/getFollower";
import { getFollowing } from "@/app/data/getFollowing";
import { Suspense } from "react";
import { BioEditor } from "@/app/ui/profileBio";
import ProfileImages from "@/app/ui/profileImages";
import { getUserPublicData } from "@/app/data/getUserData";
import { getGarments } from "@/app/data/getGarments";


export default async function ProfilePage({ params }: { params: { username: string } }) {
    const session = await getSession();
    const { username } = await params;
    const info = await getUserPublicData(username);
    const followers = await getFollow(info?.id);
    const following = await getFollowing(info?.id);
    let isUser = false;
    if (session?.username === username) isUser = true;
    const garments = await getGarments(username);

    return (
        <div className="pt-12 pl-32 pr-32 ">
            <div id="hero" className="flex flex-row justify-center">
                <Image
                    src={info?.image || '/default-profile.png'}
                    width={250}
                    height={250}
                    alt="Profile image"
                    className="mr-40"
                />
                <div className="flex flex-col">
                    <div id="data" className="flex flex-row gap-6 ">
                        <p className="pr-6">{username}</p>
                        <p className="text-nowrap">Followers  <Suspense><span>{followers}</span></Suspense></p>
                        <p className="text-nowrap">Following  <Suspense><span>{following}</span></Suspense></p>
                        {isUser && <Link href="/settings">
                            <Settings/>
                        </Link>}
                    </div>
                    <BioEditor initialBio={info?.bio || ""} editable={isUser} />
                </div>
            </div>
            <ProfileImages userName={username} garments={garments} />
        </div>
    )
}