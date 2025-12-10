"use client";

import SearchGenreBar from "../components/SearchGenreBar";
import GenreList from "../components/GenreList";
import { useState } from "react";

export default function DashBoardPage() {
    const [genreList, setGenreList] = useState([])

    return (
        <div className="space-y-6">
            <SearchGenreBar
                setGenreList={setGenreList}
                genreList={genreList}
            />

            {genreList.length > 0 && (
                <div className="mt-4">
                    <h2 className="text-white text-lg font-bold mb-2 ml-1">Selected Genres:</h2>
                    <GenreList
                        genresToShow={genreList}
                        selectedGenres={genreList}
                        setGenreList={setGenreList}
                    />
                </div>
            )}
        </div>
    )
}
