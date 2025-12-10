"use client";

import ObjectImg from "./ObjectImg.js"
import ArtistInfo from "./ArtistInfo.js"
import { saveObject, isOnStorage, deleteObject, ARTISTS_KEY } from "@/lib/storage.js"
import { useEffect, useState } from "react"

export default function ShowArtist({ artist }) {
    const [favorite, setFavorite] = useState(false)

    useEffect(() => {
        setFavorite(isOnStorage(artist, ARTISTS_KEY))
    }, [artist])

    function handleClick() {
        if (isOnStorage(artist, ARTISTS_KEY)) {
            deleteObject(artist, ARTISTS_KEY)
            setFavorite(false)
        }
        else {
            saveObject(artist, ARTISTS_KEY)
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
            <ObjectImg object={artist} />

            <div className="ml-4">
                <ArtistInfo artist={artist} />
            </div>
        </div>
    )
}
