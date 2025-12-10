"use client";

import { getLoadedList, TRACKS_KEY } from "@/lib/storage"
import { useEffect, useState } from "react"
import ObjectsList from "../components/ObjectList"
import SearchTrackBar from "../components/SearchTrackBar"

export default function Tracks() {
    const [tracks, setTracks] = useState([])

    useEffect(() => {
        const loadTracks = async () => {
            const data = await getLoadedList(TRACKS_KEY)
            setTracks(data)
        }

        loadTracks()
    }, [])

    return (<>
        <SearchTrackBar />
        <ObjectsList objects={tracks} name={"Favorite Tracks"} type={TRACKS_KEY} />
    </>)
}
