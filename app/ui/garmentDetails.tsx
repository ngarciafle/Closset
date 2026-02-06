import Image from "next/image";

interface GarmentData {
  id: string;
  name: string;
  brand: string;
  color: string;
  type: string;
  size: string;
  materials: string;
  images: string[];
  createdAt: Date | string; // Puede venir como string de la DB
}

export default function GarmentDetails({ garment }: { garment: GarmentData }) {
  return (
    <div>
      <h1 className=" self-center text-2xl pb-5">{garment.name}</h1>
      <div className="flex gap-2">
        <div className="flex flex-col xl:gap-8 md:gap-5 gap-3 place-content-around">
        <p className="ring-[0.5px] p-2">Brand: {garment.brand}</p>
        <p className="ring-[0.5px] p-2">Color: {garment.color}</p>
        <p className="ring-[0.5px] p-2">Type: {garment.type}</p>
        <p className="ring-[0.5px] p-2">Size: {garment.size}</p>
        <p className="ring-[0.5px] p-2">Materials: {garment.materials}</p>
        </div>
        <Image
          src={garment.images[0]}
          alt={garment.name}
          width={250}
          height={250}
          />
      </div>
    </div>
  );
}
