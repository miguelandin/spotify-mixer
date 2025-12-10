"use client";

import TrackInfo from "./TrackInfo.js"
import ObjectImg from "./ObjectImg.js"
import { saveObject, isOnStorage, deleteObject, TRACKS_KEY } from "@/lib/storage.js"
import { useEffect, useState } from "react"

export default function ShowTrack({ track }) {
    const [favorite, setFavorite] = useState(false)

    useEffect(() => {
        setFavorite(isOnStorage(track, TRACKS_KEY))
    }, [track])

    function handleClick() {
        if (isOnStorage(track, TRACKS_KEY)) {
            deleteObject(track, TRACKS_KEY)
            setFavorite(false)
        }
        else {
            saveObject(track, TRACKS_KEY)
            setFavorite(true)
        }
    }
    return (
        <div
            className={`flex flex-row items-center p-4 rounded-xl shadow-2xl backdrop-blur-md mt-1.5 cursor-pointer transition-all duration-300
                ${favorite ? 'border-2 border-yellow-400' : 'border border-transparent'}`}
            onClick={handleClick}
            style={{
                backgroundColor: 'rgba(50, 50, 50, 0.5)',
            }}
        >
            <ObjectImg object={track} />

            <div className="ml-4">
                <TrackInfo track={track} />
            </div>
        </div>
    )
}
