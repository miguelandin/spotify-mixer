"use client";

import { useState, useEffect } from "react"
import { getTracksByName } from "@/lib/tracks";
import ObjectsList from "./ObjectList";
import { TRACKS_KEY } from "@/lib/storage";

export default function SearchTrackBar() {
    const [UserInput, setUserInput] = useState("")
    const [tracks, setTracks] = useState([])

    const handleChange = (event) => {
        setUserInput(event.target.value)
    }

    useEffect(() => {
        const searchTrack = async () => {
            if (UserInput.length > 0) {
                const results = await getTracksByName(UserInput)
                setTracks(results)
            } else
                setTracks([])

        }

        searchTrack();

    }, [UserInput])

    return (
        <div className="">
            <input
                className="w-full pl-12 pr-4 py-4 bg-slate-900/80 backdrop-blur-md text-white placeholder-slate-500 border border-slate-700 rounded-2xl shadow-lg outline-none transition-all duration-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 focus:bg-slate-900"
                type="text"
                value={UserInput}
                onChange={handleChange}
                placeholder="Search tracks..."
            />
            <ObjectsList objects={tracks} type={TRACKS_KEY} />
        </div>
    )
}
