"use client";

import { getArtistsByName } from "@/lib/artists"
import { useState, useEffect } from "react"
import ObjectsList from "./ObjectList";
import { ARTISTS_KEY } from "@/lib/storage";

export default function SearchArtistBar() {
    const [userInput, setUserInput] = useState("")
    const [artists, setArtists] = useState([])

    const handleChange = (event) => {
        setUserInput(event.target.value)
    }

    useEffect(() => {
        const searchArtist = async () => {
            if (userInput.length > 0) {
                const results = await getArtistsByName(userInput)
                setArtists(results)
            } else
                setArtists([])

        }

        searchArtist();

    }, [userInput])

    return (
        <div className="">
            <input
                className="w-full pl-12 pr-4 py-4 bg-slate-900/80 backdrop-blur-md text-white placeholder-slate-500 border border-slate-700 rounded-2xl shadow-lg outline-none transition-all duration-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 focus:bg-slate-900"
                type="text"
                value={userInput}
                onChange={handleChange}
                placeholder="Search artists..."
            />
            <ObjectsList objects={artists} type={ARTISTS_KEY} />
        </div>
    )
}
