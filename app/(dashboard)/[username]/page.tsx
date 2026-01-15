import Image from "next/image"
import { getSession } from "@/app/data/getSession";
import { getFollow } from "@/app/data/getFollower";


export default async function ProfilePage({ params }: { params: { userName: string } }) {
    const session = await getSession();
    const followers = await getFollow(session?.userId);
}