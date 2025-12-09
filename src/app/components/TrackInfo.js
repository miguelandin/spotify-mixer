export default function TrackInfo({ track }) {
    if (!track) {
        return <div>Not Found</div>
    }
    const artistNames = track.artists
        ? track.artists.map(artist => artist.name).join(', ')
        : 'Unknown'

    return (
        <div className="flex flex-col justify-center min-w-0 p-2">

            <h1
                className="text-lg sm:text-xl font-bold text-white truncate"
                title={track.name}
            >
                {track.name}
            </h1>
            <p
                className="text-sm text-gray-400 truncate"
                title={artistNames}
            >
                {artistNames}
            </p>

        </div>
    )
}
