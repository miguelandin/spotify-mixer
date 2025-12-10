import Genre from "./Genre";

export default function GenreList({ genresToShow, selectedGenres, setGenreList }) {
    if (!genresToShow || genresToShow.length === 0) return null;

    return (
        <div className="flex flex-wrap gap-2 p-3 bg-slate-900/50 rounded-xl border border-white/5">
            {genresToShow.map((genre) => (
                <Genre
                    key={genre.index} genre={genre}
                    selectedGenres={selectedGenres}
                    setGenreList={setGenreList}
                />
            ))}
        </div>
    )
}
