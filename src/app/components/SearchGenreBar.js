import { getGenresByName } from "@/lib/genres"
import { useState, useEffect } from "react"
import GenreList from "./GenreList"

export default function SearchGenreBar({ setGenreList, genreList }) {
    const [userInput, setUserInput] = useState("")
    const [foundGenres, setFoundGenres] = useState([])

    const handleChange = (event) => {
        setUserInput(event.target.value)
    }

    useEffect(() => {
        if (userInput.trim() === "") {
            setFoundGenres([])
            return
        }
        const results = getGenresByName(userInput)
        setFoundGenres(results || [])
    }, [userInput])

    return (
        <div className="flex flex-col gap-4 relative w-full">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>

                <input
                    className="w-full pl-12 pr-4 py-4 bg-slate-900/80 backdrop-blur-md text-white placeholder-slate-500 border border-slate-700 rounded-2xl shadow-lg outline-none transition-all duration-300 focus:border-green-500 focus:ring-4 focus:ring-green-500/20 focus:bg-slate-900"
                    type="text"
                    value={userInput}
                    onChange={handleChange}
                    placeholder="Search genres (pop, rock, indie)..."
                />
            </div>

            <GenreList
                genresToShow={foundGenres}
                selectedGenres={genreList}
                setGenreList={setGenreList}
            />
        </div>
    )
}
