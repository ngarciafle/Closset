import Form from "next/form"
import { uploadGarment } from "@/app/actions/uploadGarment"
import { CldUploadWidget } from "next-cloudinary";


export default function addGarmentPage() {
    return (
        <div className="bg-background-secondary p-4 rounded-xl">
            <Form action={uploadGarment} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="garmentName">Name</label>
                    <input className="ring-1 ring-foreground" type="text" id="garmentName" name="garmentName" />
                </div>

                <CldUploadWidget 
                    uploadPreset="nombre_de_tu_preset" // Debes crearlo en la consola de Cloudinary
                    onSuccess={(results) => {
                        // Aquí recibes la URL para guardarla en tu Postgres
                        console.log("Imagen subida:", results.info);
                    }}
                ></CldUploadWidget>
                <div className="flex flex-row gap-2">
                    <label htmlFor="materials">Materials</label>
                    <input className="ring-1 ring-foreground" type="text" id="materials" name="materials" />
                </div>
                <div className="flex flex-row gap-2">
                    <label htmlFor="brand">Brand</label>
                    <input className="ring-1 ring-foreground" type="text" id="brand" name="brand" />
                </div>
                <div className="flex flex-row gap-2">
                    <label htmlFor="size">Size</label>
                    <input className="ring-1 ring-foreground" type="text" id="size" name="size" />
                </div>

                <button className="bg-accent text-background-primary px-4 py-2 rounded-lg hover:brightness-90 bg-background shadow transition">
                    Add Garment
                </button>
            </Form>
        </div>
    )
}