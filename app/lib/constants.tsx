import { Home, Heart, MessageSquare, User, UsersRound } from "lucide-react";

export const linkSideNav = [
  { name: "Home", href: "/", icon: Home },
  { name: "Messages", href: "/messages", icon: MessageSquare },
  { name: "Wishlist", href: "/wishlist", icon: Heart },
  { name: "Exchanges", href: "/exchanges", icon: UsersRound },
  { name: "My closet", href: "/my-closset", icon: User },
];

export const optionsMain = [
  { name: "For you", tag: "for-you" },
  { name: "Following", tag: "following" },
  { name: "Trending", tag: "trending" },
  { name: "New", tag: "new" },
  { name: "Garments", tag: "garments" },
  { name: "Outfits", tag: "outfits" },
  { name: "Profiles", tag: "profiles" },
];

export const tags = [
  // --- STYLE (Vibe/Aesthetic) ---
  {
    name: "Streetwear",
    tag: "streetwear",
    color: "text-purple-600 border-purple-600",
  },
  {
    name: "Y2K",
    tag: "y2k",
    color: "text-fuchsia-500 border-fuchsia-500",
  },
  {
    name: "Minimalist",
    tag: "minimalist",
    color: "text-slate-500 border-slate-500",
  },
  {
    name: "Vintage",
    tag: "vintage",
    color: "text-yellow-600 border-yellow-600",
  },
  {
    name: "Old money",
    tag: "old money",
    color: "text-emerald-700 border-emerald-700",
  },
  {
    name: "Gorpcore",
    tag: "gorpcore",
    color: "text-stone-600 border-stone-600",
  },

  // --- FIT (Corte de la prenda) ---
  {
    name: "Oversized",
    tag: "oversized",
    color: "text-blue-500 border-blue-500",
  },
  {
    name: "Baggy",
    tag: "baggy",
    color: "text-sky-500 border-sky-500",
  },
  {
    name: "Slim fit",
    tag: "slim fit",
    color: "text-blue-600 border-blue-600",
  },
  {
    name: "Skinny",
    tag: "skinny",
    color: "text-blue-800 border-blue-800",
  },
  {
    name: "Cropped",
    tag: "cropped",
    color: "text-cyan-600 border-cyan-600",
  },
  {
    name: "Boxy",
    tag: "boxy",
    color: "text-indigo-500 border-indigo-500",
  },
];