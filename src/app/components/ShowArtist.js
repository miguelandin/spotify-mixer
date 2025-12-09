import ObjectImg from "./ObjectImg.js"
import ArtistInfo from "./ArtistInfo.js"

export default function ShowArtist({ artist }) {
    return (
        <div
            className="flex flex-row items-center p-4 rounded-xl shadow-2xl backdrop-blur-md w-[90vw] mt-1.5"

            style={{
                backgroundColor: 'rgba(50, 50, 50, 0.5)',
            }}
        >
            <ObjectImg object={artist} />

            <div className="ml-4">
                <ArtistInfo artist={artist} />
            </div>
        </div>
    )
}
