'use client';

export default function TrackImg({ track }) {

    const imageUrl = track.image
    const size = 150
    const altText = track.name

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
            <img
                src={imageUrl}
                alt={altText}
                width={size}
                height={size}
                style={{ objectFit: 'cover' }}
                className="rounded-md"
            />
        </div>
    )
}
