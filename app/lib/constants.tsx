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
  {
    name: "Streetwear",
    tag: "ESTILO",
    color: "bg-purple-600 text-white border-purple-700",
  }, // Intenso y urbano
  {
    name: "Y2K",
    tag: "ESTILO",
    color: "bg-fuchsia-300 text-fuchsia-900 border-fuchsia-400",
  }, // Llamativo, vibrante
  {
    name: "Minimalista",
    tag: "ESTILO",
    color: "bg-slate-50 text-slate-500 border-slate-200",
  }, // Súper limpio y neutro
  {
    name: "Vintage",
    tag: "ESTILO",
    color: "bg-yellow-900 text-yellow-100 border-yellow-950",
  }, // Tono sepia/nostálgico
  {
    name: "Old Money",
    tag: "ESTILO",
    color: "bg-emerald-900 text-emerald-50 border-emerald-950",
  }, // Verde oscuro, elegante
  {
    name: "Gorpcore",
    tag: "ESTILO",
    color: "bg-stone-700 text-stone-100 border-stone-800",
  }, // Tonos tierra/montaña

  // --- FIT (Corte de la prenda) ---
  // Gama de azules: más claro = más holgado, más oscuro = más ajustado
  {
    name: "Oversized",
    tag: "FIT",
    color: "bg-blue-100 text-blue-800 border-blue-200",
  }, // Relajado y claro
  {
    name: "Baggy",
    tag: "FIT",
    color: "bg-sky-200 text-sky-900 border-sky-300",
  }, // Muy holgado
  {
    name: "Slim Fit",
    tag: "FIT",
    color: "bg-blue-500 text-white border-blue-600",
  }, // Estándar/Equilibrado
  {
    name: "Skinny",
    tag: "FIT",
    color: "bg-blue-900 text-blue-50 border-blue-950",
  }, // Muy ajustado/Oscuro
  {
    name: "Cropped",
    tag: "FIT",
    color: "bg-cyan-100 text-cyan-800 border-cyan-200",
  }, // Ligero y corto
  {
    name: "Boxy",
    tag: "FIT",
    color: "bg-indigo-400 text-white border-indigo-500",
  }, // Estructurado

  // --- OCASION (Contexto de uso) ---
  // Gama de verdes y tonos de "momento del día"
  {
    name: "Casual",
    tag: "OCASION",
    color: "bg-emerald-100 text-emerald-800 border-emerald-200",
  }, // Fácil, de día
  {
    name: "Fiesta / Noche",
    tag: "OCASION",
    color: "bg-zinc-900 text-zinc-100 border-black",
  }, // Oscuro, nocturno
  {
    name: "Oficina / Formal",
    tag: "OCASION",
    color: "bg-teal-800 text-teal-50 border-teal-900",
  }, // Serio, profesional
  {
    name: "Gimnasio",
    tag: "OCASION",
    color: "bg-lime-400 text-lime-950 border-lime-500",
  }, // Enérgico, activo
  {
    name: "Playa",
    tag: "OCASION",
    color: "bg-cyan-200 text-cyan-900 border-cyan-300",
  }, // Acuático, fresco

  // --- MATERIAL (Composición) ---
  // Tonos orgánicos y texturas
  {
    name: "Algodón",
    tag: "MATERIAL",
    color: "bg-orange-50 text-orange-800 border-orange-100",
  }, // Suave, claro
  {
    name: "Denim",
    tag: "MATERIAL",
    color: "bg-blue-700 text-blue-50 border-blue-800",
  }, // Azul vaquero clásico
  {
    name: "Lino",
    tag: "MATERIAL",
    color: "bg-stone-200 text-stone-800 border-stone-300",
  }, // Beige/Arena
  {
    name: "Cuero",
    tag: "MATERIAL",
    color: "bg-amber-950 text-amber-100 border-black",
  }, // Marrón muy oscuro/Negro
  {
    name: "Lana",
    tag: "MATERIAL",
    color: "bg-orange-200 text-orange-900 border-orange-300",
  }, // Cálido, invernal

  // --- TIPO (Hard Fact) ---
  // Gama de grises: más pesado el artículo = más oscuro el gris
  {
    name: "Camiseta",
    tag: "TIPO",
    color: "bg-slate-100 text-slate-800 border-slate-200",
  }, // Ligero
  {
    name: "Sudadera",
    tag: "TIPO",
    color: "bg-slate-300 text-slate-900 border-slate-400",
  }, // Medio
  {
    name: "Pantalón",
    tag: "TIPO",
    color: "bg-slate-500 text-white border-slate-600",
  }, // Base
  {
    name: "Chaqueta",
    tag: "TIPO",
    color: "bg-slate-800 text-slate-100 border-slate-900",
  }, // Pesado/Exterior
  {
    name: "Zapatillas",
    tag: "TIPO",
    color: "bg-zinc-700 text-white border-zinc-800",
  }, // Distinto
  {
    name: "Accesorios",
    tag: "TIPO",
    color: "bg-gray-200 text-gray-800 border-gray-300",
  }, // Complementario
];
