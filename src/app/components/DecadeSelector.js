export default function DecadeSelector({ selectedDecades, setSelectedDecades }) {
    const decades = [1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020]


    const toggleDecade = (decade) => {
        if (selectedDecades.includes(decade)) {
            setSelectedDecades(selectedDecades.filter((d) => d !== decade))
        } else {
            setSelectedDecades([...selectedDecades, decade])
        }
    }

    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-3">
                {decades.map((decade) => {
                    const isSelected = selectedDecades.includes(decade)

                    return (
                        <button
                            key={decade}
                            onClick={() => toggleDecade(decade)}
                            className={`
                px-5 py-2 rounded-xl font-medium text-sm transition-all duration-300 transform hover:scale-105
                ${isSelected
                                    ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30 border border-purple-400"
                                    : "bg-slate-800 text-gray-400 border border-slate-700 hover:border-gray-500 hover:text-white"
                                }
              `}
                        >
                            {decade}s
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
