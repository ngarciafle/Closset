import { Home, Heart, MessageSquare, User, UsersRound } from "lucide-react";

export const linkSideNav = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Messages', href: '/messages', icon: MessageSquare },
    { name: 'Wishlist', href: '/wishlist', icon: Heart },
    { name: 'Exchanges', href: '/exchanges', icon: UsersRound },
    { name: 'My closet', href: '/my-closset', icon: User }
]

export const optionsMain = [
    { name: 'For you', tag: 'for-you'},
    { name: 'Following', tag: 'following'},
    { name: 'Trending', tag: 'trending'},
    { name: 'New', tag: 'new'},
    { name: 'Garments', tag: 'garments'},
    { name: 'Outfits', tag: 'outfits'},
]