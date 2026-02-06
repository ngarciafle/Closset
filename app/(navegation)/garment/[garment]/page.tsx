import getGarmentInfo from "@/app/data/getGarmentInfo"
import GarmentDetails from "@/app/ui/garmentDetails";

export default async function garmentPage({ params }: { params: { garment: string } }) {
  const { garment } = await params;
  const garmentInfo = await getGarmentInfo(garment)
  return (
    <div className="">
      <GarmentDetails garment={garmentInfo} />
    </div>
  )
}