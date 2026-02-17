
import Image from "next/image";


export default function ContainerPhotos(content: String[]) {
    let page;
    for (let i = 0; i < 10; i++) {
        let image = (
            <></>
            // <a className="w-full h-64 bg-gray-300 rounded-lg mb-4" href={content[i].link}>
            //     {/* <Image src={content[i].image} alt="Photo" width={400} height={400} /> */}
            // </a>
        )
        page = page ? [...page, image] : [image];
    }
    return page;
}