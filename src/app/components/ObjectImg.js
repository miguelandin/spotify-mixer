export default function ObjectImg({ object }) {

    const imageUrl = object.image
    const size = 150
    const altText = object.name

    if (!imageUrl) {
        return (
            <div
                className="bg-gray-300 flex items-center justify-center rounded-md"
                style={{ width: size, height: size }}
            >
                ?
            </div>
        )
    }

    return (
        <div
            className="relative rounded-md shadow-lg hover:scale-105 transition-transform"
            style={{ width: size, height: size }}
        >
            <a
                href={object.uri}
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={imageUrl}
                    alt={altText}
                    width={size}
                    height={size}
                    style={{ objectFit: 'cover' }}
                    className="rounded-md"
                />
            </a>
        </div>
    )
}
