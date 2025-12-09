export default function ArtistInfo({ artist }) {
    if (!artist) {
        return <div>Not Found</div>
    }
    const genres = artist.genres
        ? artist.genres.map(genre => genre).join(', ')
        : 'Unknown'

    return (
        <div className="flex flex-col justify-center min-w-0 p-2">

            <h1
                className="text-lg sm:text-xl font-bold text-white truncate"
                title={artist.name}
            >
                {artist.name}
            </h1>
            <p
                className="text-sm text-gray-400 truncate"
                title={genres}
            >
                {genres}
            </p>

        </div>
    )
}
