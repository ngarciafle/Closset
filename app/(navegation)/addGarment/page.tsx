import Form from "next/form"


export default function addGarmentPage() {
    return (
        <div>
            <Form action="">
                <label htmlFor="garmentName">Garment Name</label>
                <input type="text" id="garmentName" name="garmentName" />

                <label htmlFor="photo" className=""></label>
                <input type="file" id="photo" name="photo" multiple  />

                <label htmlFor="materials">Materials</label>
                <input type="text" id="materials" name="materials" />
            </Form>
        </div>
    )
}