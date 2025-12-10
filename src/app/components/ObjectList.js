import ShowTrack from "../components/ShowTrack"
import ShowArtist from "../components/ShowArtist"
import { ARTISTS_KEY, TRACKS_KEY } from "@/lib/storage"
export default function ObjectsList({ objects, name, type }) {

    if (!objects || objects.length === 0) {
        return <div className="text-gray-500 mt-4">(-_-) zzz </div>
    }

    return (
        <div className="w-full mt-6">
            <h1 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
                {name}
            </h1>

            <div className="flex flex-col gap-2">
                {objects.map((object, index) => {
                    if (type === ARTISTS_KEY)
                        return <ShowArtist key={index} artist={object} />
                    else if (type === TRACKS_KEY)
                        return <ShowTrack key={index} track={object} />

                })}
            </div>
        </div>
    )
}
