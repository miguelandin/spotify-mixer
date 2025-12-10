"use client";

import { getArtistsByName } from "@/lib/artists"
import { useState, useEffect } from "react"
import ShowArtist from "./ShowArtist";

export default function SearchArtistBar() {
    const [UserInput, setUserInput] = useState("")
    const [artists, setArtists] = useState([])

    const handleChange = (event) => {
        setUserInput(event.target.value)
    }

    useEffect(() => {
        const searchArtist = async () => {
            if (UserInput.length > 0) {
                const results = await getArtistsByName(UserInput)
                setArtists(results)
            } else
                setArtists([])

        }

        searchArtist();

    }, [UserInput])

    return (
        <div className="">
            <input
                className="w-full pl-12 pr-4 py-4 bg-slate-900/80 backdrop-blur-md text-white placeholder-slate-500 border border-slate-700 rounded-2xl shadow-lg outline-none transition-all duration-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 focus:bg-slate-900"
                type="text"
                value={UserInput}
                onChange={handleChange}
                placeholder="Search artists..."
            />
            {artists.map((artist, index) => (
                <ShowArtist key={index} artist={artist} />
            ))}
        </div>
    )
}
