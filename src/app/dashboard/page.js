"use client";

import SearchGenreBar from "../components/SearchGenreBar"
import GenreList from "../components/GenreList"
import DecadeSelector from "../components/DecadeSelector"
import ObjectsList from "../components/ObjectList"
import PopularitySelector from "../components/PopularitySelector"
import { useState, useMemo } from "react"
import { getAllGenres } from "@/lib/genres"
import { generatePlaylist } from "@/lib/spotify"
import { getList, TRACKS_KEY, ARTISTS_KEY } from "@/lib/storage"

export default function DashBoardPage() {
    const [genreList, setGenreList] = useState([])
    const [decades, setDecades] = useState([])
    const [popularity, setPopularity] = useState([0, 100])

    const [playList, setPlayList] = useState([])
    const [isGenerating, setIsGenerating] = useState(false)

    const allGenresFormatted = useMemo(() => {
        const rawGenres = getAllGenres()
        return rawGenres.map((genreName, index) => ({
            genre: genreName,
            index: index,
        }))
    }, [])

    async function handleGenerateClick() {
        setIsGenerating(true)

        const preferences = {
            artists: getList(ARTISTS_KEY),
            genres: genreList,
            decades: decades,
            popularity: popularity,
            favorites: getList(TRACKS_KEY)
        }

        try {
            const data = await generatePlaylist(preferences)
            setPlayList(data)
        } catch (error) {
        } finally {
            setIsGenerating(false)
        }
    }

    return (
        <div className="p-6 space-y-10 pb-20">

            <div className="space-y-4">
                <SearchGenreBar
                    setGenreList={setGenreList}
                    genreList={genreList}
                />
            </div>

            <div className="space-y-6">
                <div className="max-h-60 overflow-y-auto custom-scrollbar pr-2 bg-slate-900/30 p-2 rounded-xl border border-white/5">
                    <GenreList
                        genresToShow={allGenresFormatted}
                        selectedGenres={genreList}
                        setGenreList={setGenreList}
                    />
                </div>

                <DecadeSelector
                    selectedDecades={decades}
                    setSelectedDecades={setDecades}
                />
            </div>

            <PopularitySelector
                popularity={popularity}
                setPopularity={setPopularity}
            />

            <div className="flex justify-center pt-4">
                <button
                    onClick={handleGenerateClick}
                    className={`
                        px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 shadow-xl
                            bg-green-500 hover:bg-green-400 text-black hover:scale-105 hover:shadow-green-500/50"
                    `}
                >
                    GENERATE
                </button>
            </div>

            {!isGenerating && playList.length > 0 && (
                <div className="animate-in fade-in slide-in-from-bottom-10 duration-700">
                    <ObjectsList
                        objects={playList}
                        name={null}
                        type={TRACKS_KEY}
                    />
                </div>
            )}
        </div>
    )
}
