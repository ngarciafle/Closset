



export default function ContainerPhotos(content: React.ReactNode) {
    for (let i = 0; i < 10; i++) {
        content = (
            <div className="w-full h-64 bg-gray-300 rounded-lg mb-4">
                {content}
            </div>
        )
    }
    return content;
}