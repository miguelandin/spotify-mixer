export default function Genre({ genre, selectedGenres, setGenreList }) {
    const isSelected = selectedGenres.some((item) => item.index === genre.index);

    function handleClick() {
        if (isSelected) {
            const newGenreList = selectedGenres.filter(item => item.index !== genre.index)
            setGenreList(newGenreList)
        }
        else {
            setGenreList([genre, ...selectedGenres])
        }
    }

    return (
        <div
            onClick={handleClick}
            className={`
                cursor-pointer px-4 py-2 rounded-full border transition-all duration-200 select-none
                ${isSelected
                    ? 'bg-green-500 text-white border-green-600 shadow-md shadow-green-500/20'
                    : 'bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200'
                }
            `}
        >
            {genre.genre}
        </div>
    )
}
